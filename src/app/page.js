import React from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'
import Marquee from './components/Marquee'

const page = () => {
  return (
    <>
    <div className='bg-[#F3F6F7] min-h-screen w-full'>
    <Navbar />
    <HeroHome />
    <Marquee />
    </div>
    </>
  )
}

export default page