"use client";
import React from 'react'
import next from 'next'
import Image from 'next/image'
import av from '../../../public/assets/about/av.svg';
import av1 from '../../../public/assets/about/av1.svg';
import av3 from '../../../public/assets/about/av3.svg';
import span from '../../../public/assets/about/span.svg';




const Component3 = () => {
  return (
<>

<div className=' flex flex-col items-center justify-center py-20 small:py-3 small:mt-5 medium:py-5'>
        <h1 className=' text-[#EEC044] font-abc text-4xl small:text-2xl'>Team Members</h1>
        <h1 className=' text-[#1F1E17] font-extrabold text-5xl medium:text-3xl small:text-2xl'>Meet Our Farmers</h1>
    </div>



    <div className='lg:px-52'>
           
           <div className=' grid justify-center items-center grid-cols-3 small:grid small:grid-cols-1 
           medium:grid medium:grid-cols-2 p-10 gap-5'>
                
                <div className=''>
 
                <Image
                src={av}
                width=''
                height=''
                alt='grid image'
                className=' rounded w-full medium:h-[400px] small:h-[250px]'
                />
                <div className=' small:flex small:items-center small:flex-col medium:flex medium:flex-col medium:items-center'>
                <div className=' relative lg:-mt-[70px] small:mt-3 medium:mt-1 lg:z-[1] w-[170px] h-[70px]
                 lg:left-36 bg-[#FFFFFF] rounded-l-lg shadow small:shadow-none medium:shadow-none'>
                    <div className=' py-3 text-center'>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>Kelvin Smith</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Farmer</h1>
                    </div>

                <div className=' relative -mt-[50px] right-20 z-[1] small:flex small:justify-between small:right-16 medium:flex medium:justify-between medium:right-16'>
                    <Image
                src={span}
                width={40}
                height={50}
                alt='grid image'
                className=' rounded w-full h-[50px] small:h-[32px] medium:h-[32px]'
                />
                </div>
                </div>
</div>
               </div>

               
               <div className=''>
                <Image
                src={av1}
                width=''
                height=''
                alt='grid image'
                className=' rounded w-full medium:h-[400px] small:h-[250px]'
                />
                <div className=' small:flex small:items-center small:flex-col medium:flex medium:flex-col medium:items-center'>
                 <div className=' relative lg:-mt-[70px] small:mt-3 medium:mt-3 lg:z-[1] w-[170px] h-[70px] 
                 lg:left-36 bg-[#FFFFFF] rounded-l-lg shadow small:shadow-none medium:shadow-none'>
                    <div className=' py-3 text-center '>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>Jessica Brown</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Farmer</h1>
                    </div>
                    <div className=' relative -mt-[50px] right-20  z-[1] small:flex small:justify-between small:right-20 medium:flex medium:justify-between medium:right-20'>
                    <Image
                src={span}
                width={40}
                height={50}
                alt='grid image'
                className=' rounded w-full h-[50px] small:h-[32px] medium:h-[32px]'
                />
                </div>
                </div>
</div>
                </div>
 
               <div className=''>
                <Image
                src={av3}
                width=''
                height=''
                alt='grid image'
                className=' rounded w-full medium:h-[400px] small:h-[250px]'
                /> 
                <div className=' small:flex small:items-center small:flex-col medium:flex medium:flex-col medium:items-center'>
                 <div className=' relative lg:-mt-[70px] small:mt-3 medium:mt-1 lg:z-[1] w-[170px] h-[70px] lg:left-36 
                 rounded-l-lg bg-[#FFFFFF] shadow small:shadow-none medium:shadow-none'>
                    <div className=' py-3 text-center'>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>David Martin</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Farmer</h1>
                    </div>
                    <div className=' relative -mt-[50px] right-20  z-[1] small:flex small:justify-between small:right-16 medium:flex medium:justify-between medium:right-16'>
                    <Image
                src={span}
                width={40}
                height={50}
                alt='grid image'
                className=' rounded w-full h-[50px] small:h-[32px] medium:h-[32px]'
                />
                </div>
                </div>
                </div>
                </div>
       
        </div>
 

        </div>




</>
  )
}

export default Component3