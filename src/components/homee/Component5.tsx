"use client";
import next from 'next';
import React from 'react'
import Image from 'next/image';
import grape from '../../../public/assets/component5/grape.svg';
import onion from '../../../public/assets/component5/onion.svg';
import apple from '../../../public/assets/component5/apple.svg';
import banana from '../../../public/assets/component5/banana.svg';


const Component5 = () => {
  return (
    <>
    <div className=' pt-24 small:py-9 medium:py-12 text-center'>
      <div className=' font-abc text-[#EEC044] text-2xl flex justify-center'>
        <h1>Special Offers</h1>
      </div>
      <div className=' font-extrabold text-5xl small:text-2xl medium:text-3xl text-[#1F1E17] flex justify-center'>
        <h1>Today's Hot Deal</h1>

      </div>

    </div>
    
    <div className=' mt-16 small:mt-0 medium:mt-0 lg:px-52'>
           
           <div className=' lg:grid justify-center items-center lg:grid-cols-4 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 p-10 gap-5'>
                
                <div>
 
                <Image
                src={grape}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />
                <ul className=' flex justify-between px-3 text-center'>

                 <li className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Grapes</li>
                 <li className=' text-[14px] text-[#EEC044] text-center gap-1 pb-2 mt-3'>55555</li>
                </ul>
                 <h1 className=' font-semibold px-3 text-[#4BAF47] lg:text-base  md:text-base text-left sm:text-base'>$100.00</h1>
                </div>
               
               <div>
                <Image
                src={onion}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />

                <ul className=' flex justify-between px-3  text-center'>
                <li className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3'>Onions</li>
                <li className=' text-[14px] text-[#EEC044] text-center gap-1 pb-2 mt-3'>55555</li>
                </ul>
                <h1 className=' font-semibold px-3  text-[#4BAF47]  lg:text-base md:text-base text-left sm:text-base'>$20.00</h1>
                </div>
 
               <div>
                <Image
                src={apple}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                /> 
                 <ul className=' flex justify-between px-3  text-center'>
                <li className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Apples</li>
                 <li className=' text-[14px] text-[#EEC044] text-center gap-1 pb-2 mt-3'>55555</li>
                 </ul>
                 
                 <h1 className=' font-semibold px-3  text-[#4BAF47]  lg:text-base   md:text-base text-left sm:text-base'>$50.00</h1>
                </div>
       
      
                <div>
                <Image
                src={banana}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />

                <ul className=' flex justify-between px-3  text-center'>
                <li className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Bananas</li>
                <li className=' text-[14px] text-[#EEC044] text-center gap-1 pb-2 mt-3'>55555</li>
                </ul>
                 <h1 className=' font-semibold px-3  text-[#4BAF47]  lg:text-base md:text-base text-left sm:text-base'>$20.00</h1>
                </div>
 
                </div>
 
           
 
        </div>
    </>
  )
}

export default Component5