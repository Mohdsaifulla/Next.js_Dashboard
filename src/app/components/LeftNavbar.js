"use client";
import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faBookOpen,
  faLongArrowLeft,
  faSignOutAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
function LeftNavbar() {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPageOpen, setPageOpen] = useState(false);
  const [isOpenAuthentic, setOpenAuthenctic] = useState(false);
  const [isOpenError, setOpenError] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const togglePageDropdown = () => {
    setPageOpen(!isPageOpen);
  };
  const toggleAuthentic = () => {
    setOpenAuthenctic(!isOpenAuthentic);
  };
  const toggleError = () => {
    setOpenError(!isOpenError);
  };
  return (
    <>
      <div className={styles.mainNav}>
        <div
          className={active ? styles.activenavcontainer : styles.navcontainer}
        >
          {/* <div className={styles.logo}> */}
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? styles.activehamburger : styles.hamburger}
            ></div>
          </div>
          <div className={active ? styles.wrapper : styles.activewrapper}>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  style={{ width: "18px", cursor: "pointer" }}
                />
                <a href="/chartsection"> Dashboard</a>
              </li>

              <p>INTERFACE</p>
              <li className={styles.dropdown1}>
                <FontAwesomeIcon
                  icon={faBookOpen}
                  style={{ width: "18px", cursor: "pointer" }}
                  // onClick={toggleDropdown}
                />
                <a href="#" onClick={toggleDropdown}>
                  Layout
                </a>
                {/* ************** */}
                {isOpen && (
                  <ul className={styles.dropdownMenu1}>
                    <li>
                      <a href="/error404">Static Nav</a>
                    </li>
                    <li>
                      <a href="/error500">Light Sidenav</a>
                    </li>
                  </ul>
                )}
                {/* ************* */}
              </li>
              <li className={styles.dropdown2}>
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  style={{ width: "18px", cursor: "pointer" }}
                  // onClick={togglePageDropdown}
                />
                <a href="#" onClick={togglePageDropdown}>
                  Pages
                </a>
                {/* *********** */}
                {isPageOpen && (
                  <ul className={styles.dropdownMenu1}>
                    <li className={styles.dropdown3}>
                      <a href="#" onClick={toggleAuthentic}>
                        Authentication
                      </a>
                      {isOpenAuthentic && (
                        <ul className={styles.dropdownMenu1}>
                          <li className={styles.dropdown3}>
                            <a href="/login">Login</a>
                          </li>

                          <li>
                            <a href="/register">Register</a>
                          </li>
                          <li>
                            <a href="/forgetpassword">Forget Password</a>
                          </li>
                        </ul>
                      )}

                      {/* *********** */}
                    </li>
                    <li className={styles.dropdown4}>
                      <a href="#" onClick={toggleError}>
                        Error
                      </a>
                      {isOpenError && (
                        <ul className={styles.dropdownMenu1}>
                          <li className={styles.dropdown3}>
                            <a href="/error404">Error404</a>
                          </li>
                          <li>
                            <a href="/error500">Error 500</a>
                          </li>
                        </ul>
                      )}

                      {/* *********** */}
                    </li>
                  </ul>
                )}

                {/* *********** */}
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  style={{ width: "18px", cursor: "pointer" }}
                />
                <a href="/table">Table</a>
              </li>
              {/* <li>
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  style={{ width: "18px", cursor: "pointer" }}
                />
                <a href="#">setting</a>
              </li> */}
              <li>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ width: "18px", cursor: "pointer" }}
                />
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftNavbar;
