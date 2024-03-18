"use client";
import React from 'react'
import Image from 'next/image';
import next from 'next';
import banner1 from '../../../public/assets/component4/banner1.svg';
import banner2 from '../../../public/assets/component4/banner2.svg';


const Component4 = () => {
  return (
    <>
    
    <main className='hidden lg:flex medium:hidden small:hidden lg:px-60 lg:grid lg:grid-cols-2 small:grid-cols-1 medium:grid-cols-2 gap-5'>

     <div className=' relative'>
      <Image
               src={banner1}
               width=''
               height=''
               alt='grid image'
               className=' rounded static w-full'
               />
               
        <div className=' lg:pl-[40px] small:pl-[30px] medium:pl-[20px] absolute lg:top-0 medium:top-0 small:top-0 text-[#FFFFFF]'>
          <p className='mt-[40px] text-[14px] font-medium'>100% ORGANIC</p>
          <h1 className=' text-6xl medium:text-[20px] small:text-[20px] font-abc w-2/3'>Quality Organic Food Store</h1>
          <button className='mt-[10px] bg-[#FFFFFF] px-4 py-2 rounded-[12px] flex text-[#1F1E17] small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2 lg:px-4 lg:py-2 text-sm transition ease-in-out delay-150 hover:-translate-y-1
            hover:scale-110 duration-300 ...'>
            Order Now
          </button>
        </div>
        </div>
        
      
      <div className=' relative'>
      <Image
               src={banner2}
               width=''
               height=''
               alt='grid image'
               className=' rounded static w-full'
               />
        <div className='lg:pl-[40px] absolute lg:top-0 medium:top-0 small:top-0 text-[#FFFFFF]'>
          <p className='mt-[40px] text-[14px] font-medium'>100% ORGANIC</p>
          <h1 className=' text-6xl medium:text-[20px] small:text-[20px] font-abc w-2/2'>Healthy Products Everyday</h1>
          <button className='mt-[10px] bg-[#FFFFFF] px-4 py-2 rounded-[12px] flex text-[#1F1E17] small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2 lg:px-4 lg:py-2 text-sm transition ease-in-out delay-150 hover:-translate-y-1
            hover:scale-110 duration-300 ...'>
            Order Now
          </button>
        </div>
        </div>
      
    </main>

        <div className=' bg-[url("/banner3.svg")] w-full h-96 small:h-[300px] small:mt-6 bg-cover bg-no-repeat bg-center
        flex items-center -mt-[50px] -z-[1]'>
    
        <div className=' container px-5 text-center'>
            <div className=' text-center text-white flex flex-col '>
                <div className=' lg:space-y-4 medium:space-y-1 small:space-y-1 lg:pt-16 '>
                    <h1 className=' font-extrabold lg:text-6xl small:text-2xl medium:text-4xl '>Be Healthy & Eat Only Fresh</h1>
                    <h1 className=' font-extrabold lg:text-6xl small:text-2xl medium:text-4xl'> Organic Vagetables</h1>
                    <button className='mt-[5px] small:mx-2 small:my-2 small:px-2 medium:px-2 medium:py-2  small:py-1 bg-[#4BAF47] 
                    lg:px-4 lg:py-2
                     rounded-[5px] text-sm
                     text-[#FFFFFF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>Shop Now
                  </button>
                </div>
                    
            </div>
        </div>

    </div>

    </>
  )
}

export default Component4