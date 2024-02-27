import React from "react";
import styles from "./menu.module.css";
import MenuPost from "../menupost/MenuPost";
import MenuCategory from "../menucategory/MenuCategory";

const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>{"what's hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
        {/* <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
        </div> */}
        <MenuPost />
        <h2 className={styles.subtitle}>{"category by topic"}</h2>
        <h1 className={styles.title}>Categories</h1>

     
        <MenuCategory />

        <h2 className={styles.subtitle} style={{ marginTop: "30px" }}>
          {"choose by editor"}
        </h2>
        <h1 className={styles.title}>Editors pick</h1>
        {/* <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
            <div className={styles.imagecontainer}>
              <Image
                src="/2.jpg"
                alt=""
                className={styles.images}
                width={70}
                height={70}
              />
            </div>
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
        </div> */}
        <MenuPost />
      </div>
    </>
  );
};

export default Menu;
