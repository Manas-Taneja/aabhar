"use client";
import React, { useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Hero.module.css";

const ShopNowButton = ({}) => {
  return (
    <Link
      className={styles.ShopNowButton}
      to="Lower"
      smooth={true}
      duration={750}
    >
      Shop Now
    </Link>
  );
};

export default ShopNowButton;
