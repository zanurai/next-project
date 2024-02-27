import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./menupost.module.css";
const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imagecontainer}>
            <Image
              src="/2.jpg"
              alt=""
              className={styles.images}
              width={70}
              height={70}
            />
          </div>
        )}

        <div className={styles.ittlecontainer}>
          <span className={`${styles.cattegory} ${styles.travel}`}>
            Travels
          </span>
          <h3 className={styles.posttitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Jhon Doe</span>
            <span className={styles.date}>-10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imagecontainer}>
            <Image
              src="/2.jpg"
              alt=""
              className={styles.images}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.ittlecontainer}>
          <span className={`${styles.cattegory} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.posttitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Jhon Doe</span>
            <span className={styles.date}>-10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imagecontainer}>
            <Image
              src="/2.jpg"
              alt=""
              className={styles.images}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.ittlecontainer}>
          <span className={`${styles.cattegory} ${styles.food}`}>Food</span>
          <h3 className={styles.posttitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Jhon Doe</span>
            <span className={styles.date}>-10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imagecontainer}>
            <Image
              src="/2.jpg"
              alt=""
              className={styles.images}
              width={70}
              height={70}
            />
          </div>
        )}
        <div className={styles.ittlecontainer}>
          <span className={`${styles.cattegory} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.posttitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Jhon Doe</span>
            <span className={styles.date}>-10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
