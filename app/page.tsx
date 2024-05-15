import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import React from 'react'
import LowerPage from './Components/LowerPage/LowerPage'
import './globals.css'

import Image from 'next/image';

<div className="background-container">
  <Image
    src="/public/shining-hollow-black-metal-logo_1580054995.jpg"
    alt="Background Image"
    layout="fill" // Fills the container while maintaining aspect ratio
    priority // Loads the image with high priority (optional)
  />
</div>


export default function page() {
  return (
    <>
    <section style={{minHeight:'100vh' }} id="Upper"> <Navbar/><Hero/> </section>
    <section style={{minHeight:'100vh' }} id="Lower">  <LowerPage/> </section>
    </>
  )
}
