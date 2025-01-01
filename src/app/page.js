import React from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'

const page = () => {
  return (
    <>
    <div className='bg-[#F3F6F7]  w-full min-h-screen'>
    <Navbar />
    <HeroHome />
    </div>
    </>
  )
}

export default page