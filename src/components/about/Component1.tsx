"use client";
import next from 'next';
import React from 'react'
import Image from 'next/image'
import Frame from '../../../public/assets/about/Frame.svg';
import img1 from '../../../public/assets/about/img1.svg';
import Img2 from '../../../public/assets/about/Img2.svg';

import Icon from '../../../public/assets/about/Icon.svg';
import Link from 'next/link';



const Component1 = () => {
  return (
    <>
    <div className="relative w-full py-2">
    <Image
               src={Frame}
               width=''
               height=''
               alt='img'
               className='h-64 small:h-[200px] w-full object-cover'
               />    
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h2 className="text-[#FFFFFF] text-xs font-semibold font-manrope">HOME / ABOUT</h2>
        <h2 className="text-[#FFFFFF] text-5xl small:text-6xl medium:text-4xl  font-manrope font-extrabold">About</h2>
    </div>
</div>


<div className=" w-full overflow-hidden py-24 small:py-5 medium:py-5 small:mt-8 small:px-4 medium:mt-10 
medium:px-8 px-60 items-center">
 
 <div className="md:flex gap-10 medium:gap-10 small:gap-5 ">
   <div className="md:shrink-0">
   <Image
               src={img1}
               width=''
               height=''
               alt='img'
               className=' w-full h-[470px] medium:h-[500px] small:h-[200px] object-cover'
               /> 

    <div className=' relative -mt-[250px] medium:hidden small:hidden right-36  z-[1]'>
                    <Image
                src={Img2}
                width=''
                height=''
                alt='grid image'
                className=' h-[250px] w-full'
                />
                </div>
   </div>

   <div className=" small:text-center medium:text-center small:px-4 medium:px-2 px-16">
     <div className=" text-2xl text-[#EEC044] font-abc">Get to Know Us</div>
     <h1 className="text-5xl font-extrabold font-manrope text-[#1F1E17] flex small:text-3xl small:px-1 ">The Best Agriculture
Market</h1>
     <p className="mt-8 text-[#4BAF47] font-medium text-base">There are many variations of passa of lorem available, but
the majority have suffered alteration.</p>
<p className="mt-8 text-[#878680] font-medium text-base">There are many variations of passages of lorem ipsum available but the
majority have suffered alteration in some form by injected humor or
random word which don’t look even.</p>

<div className='mt-2 small:flex small:flex-col small:items-center medium:flex medium:flex-col medium:items-center'>
<ul className='mt-[20px] text-[16px]  text-[#1F1E17] space-y-[2px] small:text-center small:flex small:flex-col small:justify-center small:items-center'>
            
            

            <li className='cursor-pointer flex gap-1'>  
          <Image src={Icon} alt='' width='' height='' />  
              <h1>Suspe ndisse suscipit sagittis</h1>
            </li>
            <li className='cursor-pointer flex gap-1'>  
          <Image src={Icon} alt='' width='' height='' />  
              <h1>Suspe ndisse suscipit sagittis</h1>
            </li>
            <li className='cursor-pointer flex gap-1'>  
          <Image src={Icon} alt='' width='' height='' />  
              <h1>Suspe ndisse suscipit sagittis</h1>
            </li>

            </ul>
    </div>

     <div className=' mt-5'>
     <button className=' small:mx-2 small:my-1 md:px-2 md:py-2 small:px-2 small:py-1 bg-[#4BAF47] lg:px-4 lg:py-3 rounded-[5px] text-sm
    text-[#FFFFFF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>Discover More
                 </button>
    </div>                                      
   </div>
 </div>
</div>





    </>
  )
}

export default Component1