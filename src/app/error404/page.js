import React from "react";
import styles from "../styles/error404.module.css"; 

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>Page Not Found</h2>
      </div>
    </div>
  );
};

export default Error404;
