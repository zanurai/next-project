"use client";
import React from "react";
import styles from "./pegination.module.css";
import { useRouter } from "next/navigation";

const Pegination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={styles.Container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pegination;
