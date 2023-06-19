// rfce

import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className={styles.headcontainer}>
        <div className={styles.headwrapper}>
          <div className={styles.title}>
            <h2>
              Hello,<span>Next.js</span>
            </h2>
            <p>Welcome to the Dashboard</p>
          </div>
        </div>
        <div className={styles.profile}>
          <Image
            src="/login.png"
            width="30"
            height="30"
            className={styles.image}
          ></Image>
        </div>
      </div>
    </>
  );
}

export default Header;
