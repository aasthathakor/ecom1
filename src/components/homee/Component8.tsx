"use client";
import React from 'react'
import next from 'next'
import Image from 'next/image'
import thumb from '../../../public/assets/component8/thumb.svg';
import thumb1 from '../../../public/assets/component8/thumb1.svg';
import thumb2 from '../../../public/assets/component8/thumb2.svg';
import thumb3 from '../../../public/assets/component8/thumb3.svg';
import thumb4 from '../../../public/assets/component8/thumb4.svg';


const Component8 = () => {
  return (
    <>
     <div className=' mt-16 lg:px-28 small:mt-5'>
           
           <div className=' lg:grid justify-center items-center small:space-y-5 lg:grid-cols-5 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 p-10 gap-5'>
                
                <div>
 
                <Image
                src={thumb}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />
                </div>
               
               <div>
                <Image
                src={thumb1}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />
                </div>
 

               <div>
                <Image
                src={thumb2}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                /> 
                </div>
       

      
                <div>
                <Image
                src={thumb3}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />
                 </div>


                <div>
                <Image
                src={thumb4}
                width={370}
                height={370}
                alt='grid image'
                className=' rounded'
                />
                </div>
 
                </div>
 
           
 
        </div>
    </>
  )
}

export default Component8