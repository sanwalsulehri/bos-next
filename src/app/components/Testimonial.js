'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import testimonialImage from '../assets/testimonialImage.png' // Replace with your image path
import SvgArrow from './svgs/arrow'
import dotsIcon from './svgs/dots'

const Testimonial = () => {
    const testimonials = [
        {
            text: "Bokning och Schema har förenklad vår verksamhet. Vi kan varmt rekommendera Bokning och Schema. Vi vill tacka Obed för varmt service och snabbt återkoppling. Vi är väldigt nöjda med Appen. Appen uppdateras hela tiden som fungerar bättre och bättre efter uppdateringarna.",
            author: "Anaastasia",
            location: "Pribaltiska",
            image: testimonialImage
        },
        {
            text: "Bokning och Schema har förenklad vår verksamhet. Vi kan varmt rekommendera Bokning och Schema. Vi vill tacka Obed för varmt service och snabbt återkoppling. Vi är väldigt nöjda med Appen. Appen uppdateras hela tiden som fungerar bättre och bättre efter uppdateringarna.",
            author: "Another Author",
            location: "Another Location",
            image: testimonialImage
        }, {
            text: "Bokning och Schema har förenklad vår verksamhet. Vi kan varmt rekommendera Bokning och Schema. Vi vill tacka Obed för varmt service och snabbt återkoppling. Vi är väldigt nöjda med Appen. Appen uppdateras hela tiden som fungerar bättre och bättre efter uppdateringarna.",
            author: "Another Author",
            location: "Another Location",
            image: testimonialImage
        }, {
            text: "Bokning och Schema har förenklad vår verksamhet. Vi kan varmt rekommendera Bokning och Schema. Vi vill tacka Obed för varmt service och snabbt återkoppling. Vi är väldigt nöjda med Appen. Appen uppdateras hela tiden som fungerar bättre och bättre efter uppdateringarna.",
            author: "Another Author",
            location: "Another Location",
            image: testimonialImage
        }, {
            text: "Bokning och Schema har förenklad vår verksamhet. Vi kan varmt rekommendera Bokning och Schema. Vi vill tacka Obed för varmt service och snabbt återkoppling. Vi är väldigt nöjda med Appen. Appen uppdateras hela tiden som fungerar bättre och bättre efter uppdateringarna.",
            author: "Another Author",
            location: "Another Location",
            image: testimonialImage
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextTestimonial = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className='max-w-7xl w-full text-[#161721] my-4 mx-auto flex flex-col items-center'>
            <div className='bg-white w-full shadow-xs rounded-2xl h-auto md:h-[370px] p-2 overflow-hidden md:p-[1px] flex md:flex-row flex-col'>
                <div className='relative h-full overflow-hidden'>
                    <div className='absolute top-0 flex items-center justify-center rounded-full md:top-48 md:-left-20 -left-20 top-20 w-[300px] h-[300px] bg-[#0079FA99]/60'>
                        <h1 className='text-white text-2xl pl-9 pb-24 text-left font-bold'>
                            What our <br /> Clients say!
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="30"
                                fill="none"
                                className='mt-2'
                                viewBox="0 0 44 34"
                            >
                                <g filter="url(#filter0_b_3373_4947)">
                                    <path
                                        fill="#fff"
                                        d="M0 34v-8.553h4.44q2.854 0 4.228-1.478 1.48-1.584 1.48-4.224v-3.484H2.643V0h16.596v20.168q0 6.546-3.489 10.242Q12.263 34 5.391 34zm24.761 0v-8.553h4.44q2.854 0 4.228-1.478 1.48-1.584 1.48-4.224v-3.484h-7.505V0H44v20.168q0 6.546-3.488 10.242Q37.023 34 30.152 34z"
                                    ></path>
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_3373_4947"
                                        width="57.4"
                                        height="47.4"
                                        x="-6.7"
                                        y="-6.7"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="3.35"
                                        ></feGaussianBlur>
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_3373_4947"
                                        ></feComposite>
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_3373_4947"
                                            result="shape"
                                        ></feBlend>
                                    </filter>
                                </defs>
                            </svg>

                        </h1>



                    </div>
                    <Image
                        src={testimonials[currentIndex].image}
                        className={`md:w-full w-full rounded-2xl h-full object-cover `}
                        alt="Client"
                        onLoad={() => setIsTransitioning(false)}
                    />
                </div>
                <div className='md:p-24 p-2 w-full'>
                    <p className='text-left text-lg italic text-gray-600'>
                        {testimonials[currentIndex].text}
                    </p>
                    <div className={'flex mt-16 items-center justify-between'}>
                        <div className={'flex gap-2 items-center justify-center'}>
                            <Image src={testimonials[currentIndex].image} className='size-12 rounded-full object-cover' alt="Client" />
                            <div>
                                <h2 className='font-semibold'>{testimonials[currentIndex].author}</h2>
                                <p className='text-gray-500'>{testimonials[currentIndex].location}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <button
                                onClick={prevTestimonial}
                                className={`size-10 rounded-full rotate-180 flex items-center justify-center ${currentIndex === 0 ? 'bg-[#F6F8FA]' : 'bg-[#3093FD]'}`}
                            >
                                <SvgArrow />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className={`size-10 rounded-full  flex items-center justify-center ${currentIndex === testimonials.length - 1 ? 'bg-white' : 'bg-[#3093FD]'}`}
                            >
                                <SvgArrow />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial 