
'use client';
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Hero.module.css";

const ShopNowButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
  }, [isDisabled]); // Run effect when isDisabled changes

  const handleClick = () => {
    setIsDisabled(true); };

  return (
    <Link
      className={`${styles.ShopNowButton} ${isDisabled ? styles.disabled : ''}`} // Apply styles from your CSS
      aria-disabled={isDisabled} // Add aria-disabled attribute
      tabIndex={isDisabled ? -1 : 0} // Set tabIndex to -1 when isDisabled is true
      to="Lower" // Target section for smooth scrolling
      smooth={true}
      duration={750}
      disabled={isDisabled} // Disable link when isDisabled is true
      onClick={handleClick} // Call handleClick on click
    >
      Shop Now
    </Link>
  );
};

export default ShopNowButton;
