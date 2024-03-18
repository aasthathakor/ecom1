"use client";
import next from 'next';
import Image from 'next/image';
import React from 'react';
import onions from '../../../public/assets/component3/onions.svg';
import carrot from '../../../public/assets/component3/carrot.svg';
import tomato from '../../../public/assets/component3/tomato.svg';
import grapes from '../../../public/assets/component3/grapes.svg';
import garlic from '../../../public/assets/component3/garlic.svg';
import lettuce from '../../../public/assets/component3/lettuce.svg';

const Component3 = () => {
  return (
    <>
    <div className=' pt-24 small:py-9 medium:py-12 text-center'>
      <div className=' font-abc text-[#EEC044] text-2xl flex justify-center'>
        <h1>Recently Added</h1>
      </div>
      <div className=' font-extrabold text-5xl small:text-2xl medium:text-3xl text-[#1F1E17] flex justify-center'>
        <h1>Latest Products</h1>

      </div>

    </div>

    <div className=' mt-16 small:-mt-2 medium:mt-1 lg:px-52'>
           
          <div className=' lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 p-10 gap-5'>
               
               <div>

               <Image
               src={onions}
               width={370}
               height={370}
               alt='grid image'
               className=' rounded'
               />
                <h1 className=' font-extrabold text-[#222222] text-[22px] medium:text-base text-center small:text-base pt-3 '>Onions</h1>
                <h1 className=' font-semibold text-[#4BAF47]  text-base   medium:text-base text-center small:text-base'>$20.00</h1>
                <h1 className=' text-[14px] text-[#EEC044] text-center gap-1 pb-3'>55555</h1>
              
               </div>
              
              <div>
               <Image
               src={carrot}
               width={370}
               height={370}
               alt='grid image'
               className=' rounded'
               />
               <h1 className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3'>Carrot</h1>
               <h1 className=' font-semibold text-[#4BAF47]  lg:text-base   md:text-base text-center sm:text-base'>$50.00</h1>
               <h1 className=' text-[14px] text-[#EEC044] text-center gap-1 pb-3'>55555</h1>
               </div>

              <div>
               <Image
               src={tomato}
               width={370}
               height={370}
               alt='grid image'
               className=' rounded'
               /> 
               <h1 className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Tomato</h1>
                <h1 className=' font-semibold text-[#4BAF47]  lg:text-base   md:text-base text-center sm:text-base'>$50.00</h1>
                <h1 className=' text-[14px] text-[#EEC044] text-center gap-1 pb-3'>55555</h1>
               </div>
      
     
               <div>
               <Image
               src={grapes}
               width={370}
               height={370}
               alt='grid image'
               className=' rounded'
               />

               <h1 className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Red Grapes</h1>
                <h1 className=' font-semibold text-[#4BAF47]  lg:text-base   md:text-base text-center sm:text-base'>$100.00</h1>
                <h1 className=' text-[14px] text-[#EEC044] text-center gap-1 pb-3'>55555</h1>
               </div>

           
               <div>
               <Image
               src={garlic}
               width={370}
               height={370}
               alt='grid image'
               className=' rounded'
               />
               <h1 className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Garlic</h1>
                <h1 className=' font-semibold text-[#4BAF47]  lg:text-base   md:text-base text-center sm:text-base'>$20.00</h1>
                <h1 className=' text-[14px] text-[#EEC044] text-center gap-1 pb-3'>55555</h1>
               </div>

                    
               <div>
               <Image
               src={lettuce}
               width={370}
               height={370}
               alt='grid image'
               className=' rounded'
               />
               <h1 className=' font-extrabold text-[#222222] lg:text-[22px] md:text-base text-center sm:text-base pt-3 '>Lettuce</h1>
                <h1 className=' font-semibold text-[#4BAF47]  lg:text-base   md:text-base text-center sm:text-base'>$30.00</h1>
                <h1 className=' text-[14px] text-[#EEC044] text-center gap-1 pb-3'>55555</h1>
               </div>

               </div>

          

       </div>
    </>
  )
}

export default Component3