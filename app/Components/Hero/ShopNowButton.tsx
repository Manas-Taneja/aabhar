'use client'
import React, { useState, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './Hero.module.css'
import { Button } from '../next-components/ui/button'



  // const scrollDown = () => {
  //   scroll.scrollTo(
  //     id: 'Lower',
  //   )

    
    
  

const ShopNowButton = ({}) => {
  return (
    <Link className={styles.ShopNowButton}
    to="Lower" // Target element ID
    smooth={true} // Enables smooth scrolling
    duration={1000} // Animation duration (1 second)
  >
    Shop Now
  </Link>
  )

}

export default ShopNowButton