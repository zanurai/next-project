import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ key, item }) => {
  return (
    <>
      <div className={styles.container} key={key}>
        {item.img && (
          <div className={styles.imagecontainer}>
            <Image
              src={item.img}
              alt="download"
              fill
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.titlecontainer}>
          <div className={styles.details}>
            <span className={styles.date}>
              {item?.createdAt.substring(0, 10)} - {""}
            </span>
            <span className={styles.category}>{item?.catSlug}</span>
          </div>
          <Link href={`/posts/${item.slug}`}>
            <h1>{item?.title} </h1>
          </Link>
          {/* <p className={styles.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            repellendus numquam doloribus libero ullam reiciendis consequuntur a
            debitis excepturi enim voluptate eligendi quibusdam distinctio autem
            doloremque, vitae hic odio nesciunt!
          </p> */}

          <p className={styles.para}>{item.desc.substring(0, 60)}</p>
          <Link href={`/posts/${item.slug}`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
