"use client";
import React, { useEffect, useState } from "react";
import styles from "./writepage.module.css";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CiImageOn } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

const WitePage = () => {
  const { status } = useSession();

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  // const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "style", //If not selected, choose the general category
      }),
    });
    alert("successfully handleSubmit");
    console.log("res;;;;", res);
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <input type="text" placeholder="category"/> */}
      <div className={styles.editor}>
        <button className={styles.button} onClick={(e) => setOpen(!open)}>
          <FaPlus />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />

            <button className={styles.addButton}>
              <label htmlFor="image">
                <CiImageOn />
              </label>
            </button>

            <button className={styles.addButton}>
              <HiOutlineExternalLink />
            </button>
            <button className={styles.addButton}>
              <FaVideo />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textarea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="tell your story...."
        />
      </div>
      <button className={styles.public} onClick={handleSubmit}>
        Public
      </button>
    </div>
  );
};

export default WitePage;
