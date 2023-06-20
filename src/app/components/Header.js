// rfce

'use client'
import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { useState } from "react";
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
       const handleOptionClick = (option) => {
         setSelectedOption(option);
         setIsOpen(false);
       };
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
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for..." />
            <button type="submit" className={styles.searchButton}>
              <img src="/search-icon-white.png" alt="Search" />
            </button>
          </div>
        </div>
        <div className={styles.profile}>
          <Image
            src="/login.png"
            width="30"
            height="30"
            className={styles.image}
          ></Image>
          <div className="dropdown">
            <p onClick={toggleDropdown}>⌄</p>
            {isOpen && (
              <ul className="dropdown-options">
                <li onClick={() => handleOptionClick("Setting")}>Setting</li>
                <li onClick={() => handleOptionClick("Activity Log")}>
                  Activity Log
                </li>
                <li onClick={() => handleOptionClick("Last Log In")}>
                  Last Log In
                </li>
              </ul>
            )}
            {/* {selectedOption? alert(`you selected Option selected: ${selectedOption}`):!selectedOption} */}
            <style jsx>{`
              .dropdown {
                position: relative;
                display: inline-block;
              }

              .dropdown p {
                cursor: pointer;
                position: relative;
                top: -14px;
                right: 44px;
                color: white;
                font-size: 20px;
              }

              .dropdown-options {
                position: absolute;
                top: 77%;
                left: -147px;
                list-style: none;
                padding: 0;
                margin: 0;
                background-color: #fff;
                border: 1px solid #ccc;
                border-top: none;
                display: flex;
                flex-direction: column;
              }

              .dropdown-options li {
                padding: 10px;
                cursor: pointer;
              }

              .dropdown-options li:hover {
                background-color: #f0f0f0;
              }
            `}</style>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
