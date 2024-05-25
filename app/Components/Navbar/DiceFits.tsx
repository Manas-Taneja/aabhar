'use client';
import React from "react";
import styles from "./Navbar.module.css";

export default function DiceFits(){
  return (
    <button onClick={() => window.location.href = 'https://dicefits.vercel.app/'}
      className={styles.dicefitslogo}>
      आbhar
    </button>
  );
}

