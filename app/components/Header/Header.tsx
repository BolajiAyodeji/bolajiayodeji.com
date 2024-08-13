"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "./Header.module.css";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className={styles.header}>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="toggle-theme"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && resolvedTheme === "dark" ? (
          <Image src="/icons/light.svg" alt="Toggle light mode icon" width={50} height={50} />
        ) : (
          <Image src="/icons/dark.svg" alt="Toggle dark mode icon" width={50} height={50} />
        )}
      </button>
      <h1 className={styles.title}>Bọ́lájí Ayọ̀dejì</h1>
    </header>
  );
};

export default Header;
