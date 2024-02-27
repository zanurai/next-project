import React from "react";
import styles from "./blogpage.module.css";
import Menu from "@/components/menu/Menu";
import Cards from "@/components/card/Cards";

import CardList from "@/components/cardlist/CardList";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blogs</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat } />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
