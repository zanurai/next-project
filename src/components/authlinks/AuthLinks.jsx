"use client";

import React, { useState } from "react";
import styles from "./authlinks.module.css";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  // const { status } = useSession();

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {!session ? ( // Check if session is falsy to determine unauthenticated state
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={toggleOpen}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {!session ? ( // Check if session is falsy to determine unauthenticated state
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write" className={styles.link}>
                write
              </Link>
              <span className={styles.link} onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
