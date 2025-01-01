'use client'

import React from 'react'
import Image from 'next/image'
import testimonialImage from '../assets/testimonialImage.png' // Replace with your image path

const Testimonial = () => {
    return (
        <div className='  max-w-7xl text-[#161721]  my-4   mx-auto flex flex-col items-center  '>
            <div className='bg-white shadow-lg rounded-2xl h-auto md:h-[370px] p-2 overflow-hidden md:p-[1px]   flex md:flex-row flex-col '>
                <div className='w-full relative    h-full overflow-hidden'>
                    <div className='absolute top-0 flex items-center justify-center    rounded-full md:top-48 md:-left-20 -left-20 top-20  w-[300px] h-[300px]  bg-[#0079FA99]/60'>
                        <h1 className='text-white text-2xl pl-9 pb-20 text-left font-bold'>
                            What our <br /> Clients say!


                        </h1>
                    </div>
                    <Image src={testimonialImage} className='md:w-[384px] w-full rounded-2xl h-full object-cover  ' alt="Client" />
                </div>
                <div className='md:p-24 p-2'>
                    <p className='text-left text-lg  italic text-gray-600'>
                        "Bokning och Schema har förenklad vår verksamhet. Vi kan varmt rekommendera Bokning och Schema. Vi vill tacka Obed för varmt service och snabbt återkoppling. Vi är väldigt nöjda med Appen. Appen uppdateras hela tiden som fungerar bättre och bättre efter uppdateringarna."
                    </p>
                    <div className='flex mt-16 items-center justify-between'>
                        <div className='flex  gap-2   items-center justify-center'>
                            <Image src={testimonialImage} className='size-12  rounded-full   object-cover  ' alt="Client" />

                          <div>
                          <h2 className=' font-semibold'>Anaastasia</h2>
                          <p className='text-gray-500'>Pribaltiska</p></div>
                          </div>
                        <div className='flex items-center  gap-3 justify-center'>
                            {/* arrow #F6F8FA */}
                            <div className='size-10 bg-[#F6F8FA] rounded-full flex items-center justify-center'>
                                
                            </div>
                            <div className='size-10 bg-[#3093FD] rounded-full flex items-center justify-center'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial 