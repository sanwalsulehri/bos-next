import React from 'react'
import Plans from '../components/Plans'
import FeaturesPricing from '../components/FeaturesPricing'

const page = () => {
  return (
    <>
      <div className='bg-[#F3F6F7] min-h-screen w-full'>
        <Plans />
        <FeaturesPricing />
    </div>
    </>
  )
}

export default page