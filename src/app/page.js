import React from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'

const page = () => {
  return (
    <>
    <div className='bg-[#F3F6F7] min-h-screen w-full'>
    <Navbar />
    <HeroHome />
    </div>
    </>
  )
}

export default page