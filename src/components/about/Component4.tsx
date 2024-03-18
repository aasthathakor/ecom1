"use client";
import React from 'react';
import next from 'next';
import Image from 'next/image';
import banner from '../../../public/assets/about/banner.svg';
import circle from '../../../public/assets/about/circle.svg';
import avtar1 from '../../../public/assets/about/avtar1.svg';
import avtar2 from '../../../public/assets/about/avtar2.svg';




const Component4 = () => {
  return (
    <>
 
<div className="relative w-full mt-10">
    <Image
               src={banner}
               width=''
               height=''
               alt='img'
               className='h-616 small:h-[700px] w-full object-cover'
               />    
     <div className="absolute inset-x-0 flex flex-col items-center justify-center top-10 small:top-1 medium:top-3">
     <div className=' flex flex-col items-center justify-center small:py-3 small:mt-5 medium:py-5'>
        <h1 className=' text-[#EEC044] font-abc text-4xl small:text-2xl'>Our Testimonials</h1>
        <h1 className=' text-[#1F1E17] font-extrabold text-5xl medium:text-3xl small:text-xl'>What They Say</h1>
    </div>
    </div>

     <div className=' absolute lg:-mt-[390px] lg:z-[1] lg:px-96 grid justify-center items-center 
                      grid-cols-2 small:grid small:grid-cols-1 
                      medium:grid medium:grid-cols-2 p-10 gap-28 small:gap-64'>

    <div className=' small:flex small:items-center small:flex-col medium:flex medium:flex-col medium:items-center'>
                <div className=' small:-mt-[600px] medium:mt-1 w-[350px] h-[200px] small:w-[300px]
                 lg:left-36 small:bg-black bg-[#FFFFFF] rounded-md shadow small:shadow-none medium:shadow-none'>
                   
                    <div className=' py-5 text-center px-[100px] small:px-[120px] small:py-11 small:pr-2 small:text-right'>
                        <h1  className='text-[#878680] font-medium text-xs'>There are many variations of passage of
                        available but the majority have suffered
                                alteration in some form by injected
                        humor or randomed.</h1>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>Bonnie Tolbet</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Customer</h1>
                        
                    </div>
                    <div className=' relative -mt-[150px] small:-mt-[170px] small:ml-4 right-40 z-[1] small:flex small:justify-between small:right-24 
                    medium:flex medium:justify-between medium:right-16'>
                    <Image
                src={avtar1}
                width=''
                height=''
                alt='grid image'
                className=' rounded w-full h-[143px] small:h-[143px] medium:h-[143px]'
                />
                </div>
                
                                <div className=' relative -mt-[90px] small:-mt-24 right-24 z-[1] small:flex small:justify-between small:right-10
                                 medium:flex medium:justify-between medium:right-16'>
                                    <Image
                                src={circle}
                                width={40}
                                height={50}
                                alt='grid image'
                                className=' rounded w-full h-[40px] small:h-[32px] medium:h-[32px]'
                                />
                                </div>
                </div>
</div>

<div className=' small:flex small:items-center small:flex-col medium:flex medium:flex-col medium:items-center'>
                <div className=' small:-mt-[600px] medium:mt-1 w-[350px] h-[200px] small:w-[300px]
                 lg:left-36 small:bg-black bg-[#FFFFFF] rounded-lg shadow small:shadow-none medium:shadow-none'>
                    <div className=' py-5 text-center px-[100px] small:px-[120px] small:py-11 small:pr-2 small:text-right'>
                        <h1 className='text-[#878680] font-medium text-xs'>There are many variations of passage of
                        available but the majority have suffered
                                alteration in some form by injected
                        humor or randomed.</h1>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>Sarah Albert</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Customer</h1>
                    </div>
                 <div className=' relative -mt-[150px] small:-mt-[170px] small:ml-4 right-40 z-[1] small:flex small:justify-between small:right-24 medium:flex 
                 medium:justify-between medium:right-16 '>
                    <Image
                src={avtar2}
                width=''
                height=''
                alt='grid image'
                className=' rounded-lg w-full h-[143px] small:h-[143px] medium:h-[143px]'
                />
                </div>

                <div className=' relative -mt-[90px] small:-mt-24 right-24 z-[1] small:flex small:justify-between small:right-10 medium:flex medium:justify-between medium:right-16'>
                                    <Image
                                src={circle}
                                width={40}
                                height={50}
                                alt='grid image'
                                className=' rounded w-full h-[40px] small:h-[32px] medium:h-[32px]'
                                />
                                </div>
                </div>
</div>
    
    </div>

    </div>
    <div className=' w-full py-14 bg-[#F8F7F0]'></div>

    </>
  )
}

export default Component4