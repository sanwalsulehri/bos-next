import React from 'react'
import Plans from '../components/Plans'
import FeaturesPricing from '../components/FeaturesPricing'
import Agency from '../components/Agency'
import Essential from '../components/Essential'

const page = () => {
  return (
    <>
      <div className='bg-[#F3F6F7] min-h-screen w-full'>
        <Agency />
        <Essential />
        <Plans />
        <FeaturesPricing />
    </div>
    </>
  )
}

export default page