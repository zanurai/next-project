import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authlinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={23} height={23} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={23} height={23} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <h3>Lamablog</h3>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/posts">
          Contact
        </Link>

        <Link className={styles.link} href="/blog">
          Blog
        </Link>

        <Link className={styles.link} href="/about">
          About
        </Link>

        {/* <Link className={styles.link} href="/write">
          Write
        </Link> */}
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
