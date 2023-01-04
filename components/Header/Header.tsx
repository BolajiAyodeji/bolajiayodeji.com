import React from "react";
import styles from "./Header.module.css";
import DarkModeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className={styles.header}>
      <DarkModeToggle />
      <h1 className={styles.title}>Bọ́lájí Ayọ̀dejì</h1>
    </header>
  );
};

export default Header;
