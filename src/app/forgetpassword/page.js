'use client'
import React, { useState } from "react";
import styles from '../styles/forget.module.css';

const Forgetpassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    setEmail("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2 className={styles.loginHeading}>Password Recovery</h2>
        <p>
          Enter your email address, and we will send you a link 
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
