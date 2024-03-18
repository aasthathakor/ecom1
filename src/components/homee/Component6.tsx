"use client";
import Image from 'next/image';
import next from 'next';
import React from 'react'
import Icon from '../../../public/assets/component6/Icon.svg';
import Icon1 from '../../../public/assets/component6/Icon1.svg';



const Component6 = () => {
  return (
    <>

   
  <div className=" w-auto h-auto bg-white overflow-hidden mt-28 small:mt-3 mx-auto">
 
  <div className="md:flex gap-6 lg:mx-60 ">
    <div className="md:shrink-0 lg:pr-5">
      <img className="h-auto w-full small:p-8 medium:p-10 object-cover " src="/banner4.svg" alt="Modern building architecture" />
    </div>

    <div className=" lg:pl-2 small:text-center medium:text-center small:px-4">
      <div className=" text-2xl text-[#EEC044] font-abc">Quality Products</div>
      <h1 className="mt-2 pr-1 text-5xl font-extrabold text-[#1F1E17] flex small:text-3xl small:px-1 ">Only Organic Food</h1>
      <p className="mt-5 text-[#878680] font-medium text-base">There are many variations of passages of lorem ipsum available but the
                                            majority have suffered alteration in some form by injected humor or
                                            random word.</p>

            
            <div className="flex items-center mt-7  lg:mb-0 w-auto h-auto small:items-center small:px-1">
            <Image src={Icon} height='' width='' alt='return image' />
            <div className='pl-4 lg:pl-8'>
                <strong className="text-lg lg:text-xl">Professional Farmers</strong>
                <h1 className='text-[#878680] text-sm lg:text-base'>There are many variation of passages of lorem ipsum.</h1>
            </div>
        </div>

        <div className="flex items-center mt-5 lg:mb-0 w-auto h-auto small:items-center small:px-1">
            <Image src={Icon1} height='' width='' alt='return image' />
            <div className='pl-4 lg:pl-8'>
                <strong className="text-lg lg:text-xl">Solution for Farming</strong>
                <h1 className='text-[#878680] text-sm lg:text-base'>There are many variation of passages of lorem ipsum.</h1>
            </div>
        </div>



      <div className=' mt-5'>

      <button className=' small:mx-2 small:my-1 md:px-2 md:py-2 small:px-2 small:py-1 bg-[#4BAF47] lg:px-4 lg:py-3 rounded-[5px] text-sm
     text-[#FFFFFF] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>Start Shopping Now
                  </button>
     </div>                                      
    </div>
  </div>
</div>


  <div className="justify-center mt-24 small:mt-12 medium:mt-12 bg-[#1F1E17] py-11 w-full h-auto">

    <div className='flex flex-col items-center lg:flex-row justify-between lg:mx-60 gap-5'>

                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Agriculture Products</h1>
                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Projects Completed</h1>
                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Satisfied Clients</h1>
                <h1 className='text-[#A5A49A] text-sm lg:text-base'>Experts Farmers</h1>


    </div>

</div>
 
    </>
  )
}

export default Component6