import React from "react";
import styles from "../styles/error500.module.css"; 

const Error500 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>500</h1>
        <h2 className={styles.errorMessage}>Internal Server Error</h2>
      </div>
    </div>
  );
};

export default Error500;
