'use client';
import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image';
import exchange from '../../public/assets/headerphoto/exchange.svg';
import store from '../../public/assets/headerphoto/store.svg';
import truck from '../../public/assets/headerphoto/truck.svg';


const Hero = () => {
  return (
    <>
    <div className=' bg-[url("/banner.png")] h-screen small:h-[400px] w-full bg-cover bg-no-repeat bg-center
     flex items-center relative '>
        <div className=' absolute inset-0 bg-black/10'></div>
        <div className=' container px-5 z-10'>
            <div className=' text-left lg:pl-52 small:text-center medium:text-center text-white flex flex-col medium:gap-[40px] '>
                <div className='space-y-14 medium:space-y-10 small:space-y-4 medium:pt-32 lg:pt-40 '>
                    <h1 className=' text-3xl  small:text-[70px] medium:text-[100px] text-[130px] font-abc text-[#EEC044] tracking-thigher relative'>Agriculture</h1>
                    <h1 className=' text-2xl  small:text-[50px] medium:text-[70px]  text-[100px] font-extrabold tracking-thigher '> & Organic</h1>
                    <h1 className=' text-2xl  small:text-[50px] medium:text-[70px]  text-[100px] font-extrabold tracking-thigher'> Market</h1>
                    <button className='mt-[5px] medium:px-2 medium:py-2 small:px-2 small:py-1 bg-[#4BAF47] px-4 py-3
                     rounded-[5px] items-center medium:items-center small:items-center
                      text-white transition ease-in-out delay-150 
                     hover:-translate-y-1 hover:scale-110 duration-300 ...'>Shop Now
                  </button>
                </div>
                    
            </div>
        </div>

        <div className=' hidden medium:hidden small:hidden absolute right-56 top-80 z-10 lg:flex flex-col gap-5 items-center'>
    
            <div className="w-5 rounded-full border border-[#FFFFFF] p-5 ring-2 ring-transparent
             transition-all hover:shadow  peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
            </div>
        <div className="w-5 rounded-full border-2 border-[#FFFFFF] p-5 ring-2 ring-transparent
         transition-all hover:shadow  peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
        </div>
      
        </div>
        </div>
</>


    
  )
}

export default Hero