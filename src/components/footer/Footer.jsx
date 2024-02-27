import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/2.jpg" alt="" width={50} height={50} />
          <h1 className={styles.logotext}>LamaBlog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          repudiandae ullam asperiores veritatis ratione numquam recusandae sed
          ipsam quam soluta saepe aut, ipsum explicabo doloribus aliquid earum
          cumque quaerat illum?
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt="Facebook Icon"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="Facebook Icon"
            width={18}
            height={18}
          />
          <Image src="/tiktok.png" alt="Facebook Icon" width={18} height={18} />
          <Image
            src="/youtube.png"
            alt="Facebook Icon"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listtitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listtitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listtitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
