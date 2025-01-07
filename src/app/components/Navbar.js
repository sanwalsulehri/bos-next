"use client"

import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import down from '../assets/down.svg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const [drawer, setdrawer] = useState(false)

    const drawerHandler = () => {
        setdrawer(prev=>!prev)
    }

    const links = [
        {
            link: "Use cases",
            icon: down
        },
        {
            link: "Pricing",
            icon: down
        },
        {
            link: "Om oss",
            icon: down
        },
        {
            link: "Products",
            icon: down
        },
    ]

  return (
    <>
    <nav className='sm:bg-white shadow-[0px_4px_4px_0px_#0000000D] px-2'>
       <div className='max-w-[1202px] mx-auto flex h-full items-center min-h-[88px]  justify-between gap-2'>
       <div className='flex items-center gap-6 xl:gap-[96px]'>
       <Link href={'/'}>
        <Image src={logo} alt='logo' />
        </Link>

        <div className='md:flex hidden items-center gap-4 xl:gap-8'>
            {links.map((link,idx)=>{
                return(
                    <div className='flex items-center hover:opacity-60 transition-all duration-100 cursor-pointer gap-1 text-[18px] font-[400]' key={idx}>{link.link}
                   <Image src={link.icon} className={`${idx === 1 ? 'hidden' : 'block'}`} alt='icon' />
                    </div>
                )
            })}
        </div>
       </div>

       <div className='flex items-center gap-6'>
       <div className='sm:flex hidden items-center gap-6'>

        <Link href={"#"} className='text-[16px] font-[400] hover:underline'>Login</Link>
        <button className='bg-[#3093FD] hover:bg-[#408fe3] py-3 px-6 rounded-full text-white font-medium text-[18px]'>Signup</button>
        </div>
        <div className='md:hidden flex' onClick={drawerHandler}>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.21131 9.86339e-05C0.879793 0.0170062 0.568568 0.164917 0.346103 0.411293C0.123638 0.657669 0.00815609 0.982327 0.0250636 1.31385C0.0419712 1.64537 0.189882 1.95659 0.436258 2.17906C0.682634 2.40152 1.00729 2.51701 1.33881 2.5001H18.6638C18.9953 2.5001 19.3133 2.3684 19.5477 2.13398C19.7821 1.89956 19.9138 1.58162 19.9138 1.2501C19.9138 0.918578 19.7821 0.600636 19.5477 0.366215C19.3133 0.131795 18.9953 9.86339e-05 18.6638 9.86339e-05H1.33881C1.29717 -0.001986 1.25295 -0.001986 1.21131 9.86339e-05ZM1.21131 7.5001C0.879793 7.51701 0.568568 7.66492 0.346103 7.91129C0.123638 8.15767 0.00815609 8.48233 0.0250636 8.81385C0.0419712 9.14537 0.189882 9.45659 0.436258 9.67906C0.682634 9.90152 1.00729 10.017 1.33881 10.0001H18.6638C18.9953 10.0001 19.3133 9.8684 19.5477 9.63398C19.7821 9.39956 19.9138 9.08162 19.9138 8.7501C19.9138 8.41858 19.7821 8.10063 19.5477 7.86621C19.3133 7.63179 18.9953 7.5001 18.6638 7.5001H1.33881C1.29717 7.49801 1.25295 7.49801 1.21131 7.5001ZM1.21131 15.0001C0.879793 15.017 0.568568 15.1649 0.346103 15.4113C0.123638 15.6577 0.00815609 15.9823 0.0250636 16.3138C0.0419712 16.6454 0.189882 16.9566 0.436258 17.1791C0.682634 17.4015 1.00729 17.517 1.33881 17.5001H18.6638C18.9953 17.5001 19.3133 17.3684 19.5477 17.134C19.7821 16.8996 19.9138 16.5816 19.9138 16.2501C19.9138 15.9186 19.7821 15.6006 19.5477 15.3662C19.3133 15.1318 18.9953 15.0001 18.6638 15.0001H1.33881C1.29717 14.998 1.25295 14.998 1.21131 15.0001Z" fill="black"/>
</svg>

        </div>
       </div>
       
       </div>
    </nav>



    {/* drawer */}
    <div className={`fixed top-0 z-[9999999] h-screen w-full left-0 ${drawer ? 'translate-x-0' : '-translate-x-full'} transition-all duration-1000  `}>
    <div onClick={drawerHandler} className='bg-black/30 fixed h-screen w-full top-0 left-0'></div>

    <div onClick={drawerHandler} className='bg-white z-[99999999999999]  transition-all duration-1000 w-[100%] sm:w-[70%] h-screen fixed top-0 left-0'>
        <div className='absolute right-5 top-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
        </div>
    <div className='flex flex-col px-6 py-10 gap-4 xl:gap-8 sm:mt-0 mt-5'>
            {links.map((link,idx)=>{
                return(
                    <div className='flex  hover:opacity-60 transition-all duration-100 cursor-pointer sm:justify-normal justify-between gap-1 sm:text-[20px] font-[400]' key={idx}>{link.link}
                   <Image src={link.icon} className={`${idx === 1 ? 'hidden' : 'block'}`} alt='icon' />
                    </div>
                )
            })}

<div className='flex mt-10 items-center gap-6'>

<Link href={"#"} className='text-[16px] font-[400] hover:underline'>Login</Link>
<button className='bg-[#3093FD] hover:bg-[#408fe3] py-3 px-6 rounded-full text-white font-medium text-[18px]'>Signup</button>
</div>
        </div>



    </div>
    </div>


    </>
  )
}

export default Navbar