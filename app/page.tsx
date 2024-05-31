import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import React from 'react'
import LowerPage from './Components/LowerPage/LowerPage'
import './globals.css'

import Image from 'next/image';
import Header from './Components/Navbar/Header/Header'
import Dropdowns from './Components/Navbar/Dropdowns'
import Footer from './Components/Footer/Footer'




export default function page() {
  return (
    <>
    <section style={{minHeight:'100vh' }} id="Upper"> <Dropdowns/><Hero/> </section>
    <section style={{minHeight:'100vh' }} id="Lower">  <LowerPage/> <Footer/></section>
    </>
  )
}
