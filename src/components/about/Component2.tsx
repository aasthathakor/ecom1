"use client";
import next from 'next';
import React from 'react'
import Image from 'next/image';
import Frame2 from '../../../public/assets/about/Frame2.svg';
import pause from '../../../public/assets/about/pause.svg';



const Component2 = () => {
  return (
    <>

<div className="relative w-full mt-2">
    <Image
               src={Frame2}
               width=''
               height=''
               alt='img'
               className='h-616 small:h-[200px] w-full object-cover'
               />    
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <Image
               src={pause}
               width='50'
               height='50'
               alt='img'
               className='small:h-[50px] medium:[50px] object-cover'
               />
        <h2 className="text-[#FFFFFF] text-5xl small:text-xl medium:text-3xl  font-manrope font-extrabold medium:pt-10 small:pt-5 pt-32 small:px-1">ECO-Friendly Products can</h2>
        <h2 className="text-[#FFFFFF] text-5xl small:text-xl medium:text-3xl  font-manrope font-extrabold">be Made from Scratch</h2>
        
    </div>
</div>


  <div className="justify-center bg-[#1F1E17] py-11 w-full h-auto">

    <div className='flex flex-row medium:grid medium:grid-cols-2 medium:items-center medium:px-20 small:flex-col items-center justify-between lg:mx-60 gap-5'>

                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Agriculture Products</h1>
                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Projects Completed</h1>
                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Satisfied Clients</h1>
                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Experts Farmers</h1>


    </div>

</div>

    </>
  )
}

export default Component2