import React from 'react'

const Team = () => {
  return (
    <section className="md:mx-auto mx-4 mt-[30px]  flex md:max-w-7xl flex-col items-center justify-between gap-4 bg-white px-4 py-10 md:flex-row md:gap-12 md:px-8 md:py-16 lg:px-16">
  
<div className="w-full md:w-1/2   space-y-3 md:space-y-7">
    <h1 className="text-[32px] md:text-[64px] font-medium leading-tight">
        Supercharge Your Team, Become The&nbsp;Best.
    </h1>
    <p className="text-sm sm:text-base  font-[400] md:text-lg xl:text-[18px] text-[#4A4C56] leading-relaxed max-w-lg">
        It's the fastest and easy way to federate your business, without any hassle. Merge your micro and macro team from anywhere in the world
    </p>
</div>

  <div className="w-full md:w-[45%] ">
  <img src="./img/Image.png" alt="" />
  </div>
</section>

  )
}

export default Team