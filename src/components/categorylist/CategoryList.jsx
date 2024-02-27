import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  console.log("res;;;;", res);
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  console.log("data;;;;", data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image src={`/${item.img}`} alt="style" width={30} height={30} />
            )}
            {item.title}
          </Link>
        ))}

        {/* <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image src="/fashion.png" alt="fashion" width={30} height={30} />
          Fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image src="/travel.png" alt="travel" width={30} height={30} />
          Travel
        </Link> */}

        {/* <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travels}`}
        >
          <Image src="/travel.png" alt="travel" width={30} height={30} />
          Travel
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image src="/culture.png" alt="culture" width={30} height={30} />
          Culture
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.code}`}
        >
          <Image src="/code.png" alt="code" width={30} height={30} />
          Coding
        </Link> */}
      </div>
    </div>
  );
};

export default CategoryList;
