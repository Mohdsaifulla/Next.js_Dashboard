import React from "react";
import styles from "../page.module.css";

function Content() {
  return (
    <>
      <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
          <div className={`${styles.tabs} ${styles.tabs1}`}>
            <div className={styles.categories}>
              <h2>Primary Card</h2>
                <li>view detail</li>
              
            </div>
          </div>
          <div className={`${styles.tabs} ${styles.tabs2}`}>
            <div className={styles.categories}>
              <h2>Warning Card</h2>
              <li>view detail</li>
            </div>
          </div>
          <div className={`${styles.tabs} ${styles.tabs3}`}>
            <div className={styles.categories}>
              <h2>Success Card</h2>
              <li>view detail</li>
            </div>
          </div>
          <div className={`${styles.tabs} ${styles.tabs4}`}>
            <div className={styles.categories}>
              <h2>Danger Card</h2>
              <li>view detail</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
