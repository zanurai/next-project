import React from "react";
import styles from "./featured.module.css";


const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Lama dev here!</b> Discover my stories
        and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imagecontainer}>
          <img src="/2.jpg" alt="download" />
        </div>
        <div className={styles.textcontainer}>
          <h2 className={styles.posttitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <p className={styles.postdescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            quas commodi dicta sint quibusdam, quod sunt laboriosam sapiente
            nihil? Reiciendis vero eos praesentium non deleniti distinctio rem
            itaque impedit dolorum.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
