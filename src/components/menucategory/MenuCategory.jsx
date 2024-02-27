import React from 'react'
import Link from "next/link";
import styles from "./menucategory.module.css";

const MenuCategory =() =>{
  return (
    <div>
      {" "}
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          Fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          Travel
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travels}`}
        >
          Travel
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          Culture
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.code}`}
        >
          Coding
        </Link>
      </div>
    </div>
  );
}

export default MenuCategory