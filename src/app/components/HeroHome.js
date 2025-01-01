'use client'

import React from 'react'
import Image from 'next/image'
import girl from '../assets/Girl.png'
import boy from '../assets/boy.png'
import girl2 from '../assets/girl2.png'
import boy2 from '../assets/boy2.png'
import rectangle from '../assets/rectangle.png'
import homeHeroImg from '../assets/homeHeroImg.png'
import Link from 'next/link'

const HeroHome = () => {
  return (
    <div className='py-14 max-w-[1200px] text-[#161721] px-2 mx-auto flex flex-col items-center gap-4'>
       <div className='max-w-[840px] mx-auto'>
        <div className='bg-[#EBEEF1] w-fit mx-auto py-1.5 px-2 rounded-full flex items-center gap-3'>
            <div class="flex -space-x-2">
                {[girl,boy,girl2,boy2].map((img,idx)=>{
                    return(
                        <Image src={img} key={idx} className='border w-6 h-6 rounded-full object-cover border-white' alt='imgs' />
                    )
                })}
            </div>
                <h1 className='font-[400]  pr-1 text-[#1D1F2C]'>Happy Customer</h1>
        </div>

        <div className='font-semibold text-[34px] sm:text-[64px]  py-6 xl:leading-[80px] leading-none text-center'>
        <div className='flex flex-wrap sm:flex-row flex-col mx-auto justify-center items-center gap-y-5 gap-x-[2px]'>
        Transform with 
        <div className='relative inline-block   text-[#3093FD] max-w-[196px] sm:max-w-[354px] min-h-[85px]'>
            <Image src={rectangle} className='object-cover object-center' alt='bg' />
            <h1 className='absolute inset-0 '>Work Force</h1>
        </div>
        </div>
        <h1 className='leading-none md:mt-0 -mt-6'>Management System</h1>
        </div>


        <p className='text-[#4A4C56] text-center md:text-[18px] font-[400] '>It’s the fastest  and easy way to exlerate your business, without any hassle. Mange<br className='xl:block hidden' /> your micro and macro team from anywhere in the world</p>


        <div className='flex sm:flex-row flex-col items-center gap-4 mt-10 mx-auto justify-center'>
            <button className='bg-[#3093FD] py-4 leading-tight px-8 rounded-full font-medium md:text-[18px] text-white  lg:text-[20px]'>Start 14-days free trial</button>
            <Link href={"#"} className="text-[#4A4C56] hover:underline font-medium md:text-[18px] lg:text-[20px]">No credit card needed</Link>
        </div>

        
        </div>

        <div className='mt-8'>
            <Image src={homeHeroImg} className='w-full h-full object-cover' alt="img" />
        </div>
    </div>
  )
}

export default HeroHome