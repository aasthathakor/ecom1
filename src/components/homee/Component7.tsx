"use client";
import React from 'react'
import next from 'next';
import Image from 'next/image';
import av from '../../../public/assets/component7/av.svg';
import av1 from '../../../public/assets/component7/av1.svg';
import av2 from '../../../public/assets/component7/av2.svg';
import span from '../../../public/assets/component7/span.svg';




const Component7 = () => {
  return (
    <>
    <div className=' flex flex-col items-center justify-center lg:py-24 small:py-3 small:mt-5 medium:py-5'>
        <h1 className=' text-[#EEC044] font-abc text-4xl small:text-2xl'>From the Blog</h1>
        <h1 className=' text-[#1F1E17] font-extrabold lg:text-5xl medium:text-3xl small:text-2xl'>News & Articles</h1>
    </div>



    <div className='lg:px-52'>
           
           <div className=' lg:grid justify-center items-center lg:grid-cols-3 small:grid small:grid-cols-1 medium:grid medium:grid-cols-2 p-10 gap-10'>
                
                <div className=''>
 
                <Image
                src={av}
                width=''
                height=''
                alt='grid image'
                className=' rounded'
                />
                <div className=' small:pl-10 medium:pl-16'>
                <div className=' relative lg:-mt-[50px] small:mt-3 medium:mt-3 lg:z-[1] w-[170px] h-[70px] lg:left-40 bg-[#FFFFFF] rounded-l-lg shadow'>
                    <div className=' py-3 text-center'>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>Kelvin Smith</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Farmer</h1>
                    </div>

                <div className=' relative -mt-[50px] right-6  z-[1]'>
                    <Image
                src={span}
                width={40}
                height={50}
                alt='grid image'
                className=' rounded'
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
                className=' rounded'
                />
                <div className=' small:pl-10 medium:pl-16'>
                 <div className=' relative lg:-mt-[50px] small:mt-3 medium:mt-3 lg:z-[1] w-[170px] h-[70px] lg:left-40 bg-[#FFFFFF] rounded-l-lg shadow'>
                    <div className=' py-3 text-center '>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>Jessica Brown</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Farmer</h1>
                    </div>
                    <div className=' relative -mt-[50px] right-6  z-[1]'>
                    <Image
                src={span}
                width={40}
                height={50}
                alt='grid image'
                className=' rounded'
                />
                </div>
                </div>
</div>
                </div>
 
               <div className=''>
                <Image
                src={av2}
                width=''
                height=''
                alt='grid image'
                className=' rounded'
                /> 
                <div className=' small:pl-10 medium:pl-16'>
                 <div className=' relative lg:-mt-[50px] small:mt-3 medium:mt-3 lg:z-[1] w-[170px] h-[70px] lg:left-40 rounded-l-lg bg-[#FFFFFF] shadow'>
                    <div className=' py-3 text-center'>
                    <h1 className='text-[#1F1E17] font-extrabold text-sm'>David Martin</h1>
                    <h1 className='text-[#878680] font-medium text-xs'>Farmer</h1>
                    </div>
                    <div className=' relative -mt-[50px] right-6  z-[1]'>
                    <Image
                src={span}
                width={40}
                height={50}
                alt='grid image'
                className=' rounded'
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

export default Component7