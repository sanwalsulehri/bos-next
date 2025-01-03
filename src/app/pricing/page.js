import React from 'react'
import Plans from '../components/Plans'
import FeaturesPricing from '../components/FeaturesPricing'
import Agency from '../components/Agency'
import Essential from '../components/Essential'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <div className='bg-[#F3F6F7] min-h-screen w-full'>
        <Navbar />
        <Agency />
        <Essential />
        <Plans />
        <FeaturesPricing />
        <Footer />
    </div>
    </>
  )
}

export default page