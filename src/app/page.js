import React from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'
import Tools from './components/Tools'
import Invoice from './components/Invoice'
import Footer from './components/Footer.js'

const page = () => {
  return (
    <>
    <div className='bg-[#F3F6F7]  w-full min-h-screen'>
    <Navbar />
    <HeroHome />
    <Tools />
    <Invoice />
    <Footer />
    </div>
    </>
  )
}

export default page