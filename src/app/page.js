import React from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'
import Marquee from './components/Marquee'
import TextCard from './components/TextCard'
import SvgGear from './components/svgs/gear'
import Step from './components/Step'
import Testimonial from './components/Testimonial'
const page = () => {
  return (
    <>
      <div className='bg-[#F3F6F7] min-h-screen w-full'>
        <Navbar />
        <HeroHome />
        <Marquee />
        <div>
          <div className="flex flex-col py-16 md:px-0 px-3 max-w-xl mx-auto items-center p-8 bg-gray-100">
            <h1 className="md:text-4xl text-2xl font-bold text-center mb-4">Go Beyond the Basics</h1>
            <p className="text-lg text-gray-700   text-center">
              We’ve thought of everything to make sure you have the tools to take your CRM to the next level.
            </p>
          </div>
          <div className='max-w-5xl md:py-4 py-0 grid md:px-0 px-3 mt-4 grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
            <TextCard />
            <TextCard />
            <TextCard />
            <TextCard />
          </div>
        </div>

        <div className='max-w-7xl space-y-10  md:py-40 py-20  md:px-0 px-3 mt-4 grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
          <Step />
          <Step />
          <Step />
        </div>
        <Testimonial />
      </div>
    </>
  )
}

export default page