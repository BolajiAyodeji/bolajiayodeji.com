import React from "react";
import styles from "./Footer.module.css";

const footerYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; Bolaji Ayodeji | 2019 - {footerYear}.
    </footer>
  );
};

export default Footer;
