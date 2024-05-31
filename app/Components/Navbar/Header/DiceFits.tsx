'use client';
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function DiceFits(){
  return (
    <Link href='/' className={styles.dicefitslogo}>
      आbhar
    </Link>
  );
}

