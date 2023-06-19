import React from "react";
import styles from "../page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerpara}>
        <p>
          &copy; {new Date().getFullYear()} This is Next.js Dashboard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;