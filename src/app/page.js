import React from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'
import Marquee from './components/Marquee'
import TextCard from './components/TextCard'
import SvgGear from './components/svgs/gear'
import TeamIcon from './components/svgs/team'
import HelpIcon from './components/svgs/help'
import UptimeIcon from './components/svgs/uptime'
import Tools from './components/Tools'
import Step from './components/Step'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const page = () => {
  return (
    <>
      <div className='bg-[#F3F6F7] min-h-screen w-full'>
        <Navbar />
        <HeroHome />
        <Marquee />
        <Tools />
        <div>
          <div className="flex flex-col py-16 md:px-0 px-3 max-w-xl mx-auto items-center p-8 bg-gray-100">
            <h1 className="md:text-4xl text-2xl font-bold text-center mb-4">Go Beyond the Basics</h1>
            <p className="text-lg text-gray-700   text-center">
              We’ve thought of everything to make sure you have the tools to take your CRM to the next level.
            </p>
          </div>
          <div className='max-w-5xl md:py-4 py-0 grid md:px-0 px-3 mt-4 grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
            <TextCard heading={"Simple & Easy Setup"} description={"Creating account to our website and use it for your required time. We always ready to give you support all the time."} icon={<SvgGear />} />
            <TextCard heading={"Team Collaboration"} description={"Creating account to our website and use it for your required time. We always ready to give you support all the time."} icon={<TeamIcon />} />
            <TextCard heading={"Premum Support"} description={"Creating account to our website and use it for your required time. We always ready to give you support all the time."} icon={<HelpIcon />} />
            <TextCard heading={"99.99% Uptime"} description={"Creating account to our website and use it for your required time. We always ready to give you support all the time."} icon={<UptimeIcon />} />
          </div>
        </div>

        <div className='max-w-7xl space-y-10  md:py-40 py-20  md:px-0 px-3 mt-4 grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
          <Step border={'left'} heading={"Track profitability in Real time"} description={"Know where you stand even before the project wrap-up. Get live insights on costs, revenue, and margins to make smarter moves along the way."} />
          <Step border={'right'} heading={"Coordinate Projects and Team Availability"} description={"Know where you stand even before the project wrap-up. Get live insights on costs, revenue, and margins to make smarter moves along the way."} />
          <Step border={'left'} heading={"Forecast Your Growth with Confidence"} description={"Know where you stand even before the project wrap-up. Get live insights on costs, revenue, and margins to make smarter moves along the way."} />
        </div>
        <div className='md:px-0 w-full px-3'>
        <Testimonial />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default page