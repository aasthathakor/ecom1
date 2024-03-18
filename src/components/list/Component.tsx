"use client";
import React from 'react'
import next from 'next';
import Image from 'next/image';
import Frame from '../../../public/assets/list/Frame.svg';
import Section from '../../../public/assets/list/Section.svg';
import agriculture from '../../../public/assets/list/agriculture.svg';
import sm1 from '../../../public/assets/list/sm1.svg';
import sm2 from '../../../public/assets/list/sm2.svg';
import arrow from '../../../public/assets/list/arrow.svg';
import Link from 'next/link';
import Home from '@/app/Home/page';



const Component = () => {
  return (
    <>

    {/* div 1 for banner */}
    <div className="relative w-full py-3">
    <Image
               src={Frame}
               width=''
               height=''
               alt='img'
               className='h-64 small:h-[200px] w-full object-cover'
               />    
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <Link className="text-[#FFFFFF] text-xs font-semibold font-manrope hover:cursor-pointer" href='/Home'>HOME / Agriculture Products</Link>
        <h2 className="text-[#FFFFFF] text-5xl small:text-6xl medium:text-5xl font-manrope font-extrabold mt-1 hover:cursor-pointer">Services</h2>
    </div>
</div>



    {/* section 2 for multiple division */}

    <section className=" container py-20 small:py-10 px-60 small:px-3 medium:px-4 items-center">
   
    {/* <!-- Grid --> */}
    <div className="grid grid-cols-12 small:grid-cols-1 gap-5   ">
      {/* <!-- First column --> */}
      <div className=" bg-[#FFFFFF] px-5 w-full small:w-[300px] medium:w-[270px] rounded-lg space-y-5 col-span-4">
      {/* <!-- First column --> */}
        <div className=' bg-[#F8F7F0] py-8 mx-3 medium:mx-3 rounded-lg space-y-3 lg:pl-7 medium:pl-7 small:text-center'>
            <ul className=' text-[#1F1E17] font-manrope font-extrabold text-xl'>Categories</ul>
            <h1 className=' text-[#878680] font-manrope font-extrabold'>Agriculture Products</h1>
            <h1 className=' text-[#878680] font-manrope font-extrabold'>Organic Products</h1>
            <h1 className=' text-[#878680] font-manrope font-extrabold'>Fresh Vegetables</h1>
            <h1 className=' text-[#878680] font-manrope font-extrabold'>Dairy Products</h1>
            <h1 className=' text-[#878680] font-manrope font-extrabold'>Harvest</h1>
        </div>


        <div className="animate-pulse relative w-full medium:px-2 rounded">
    <Image
               src={Section}
               width=''
               height=''
               alt='img'
               className=' w-full h-[320px] small:h-[270px] medium:pb-5 small:pb-5 px-1 pb-3 object-cover'
               />    
    <div className="absolute inset-0 -mt-12 small:-mt-4 medium:-mt-4 gap-3 flex flex-col items-center justify-center text-[#FFFFFF] text-center">
    <h2 className=" text-base font-extrabold font-manrope">Need Help?</h2>
        <p className=" text-xs small:text-sm medium:text-sm font-manrope font-medium px-8">Speak with a human to filling out a
form? call corporate office and we
will connect you with a team
member help.</p>
<h1 className=' font-abc text-4xl'>+92 (000) -9630</h1>
<button className='mt-[10px] bg-[#EEC044] px-4 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2 lg:px-4 lg:py-2 text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Start Shopping Now
          </button>
    </div>
</div>
      </div>

      
      {/* <!-- div second --> */}
      <div className="bg-[#FFFFFF] rounded-lg w-full col-span-8">
        
        <div className='rounded-lg'>
      <Image
               src={agriculture}
               width=''
               height=''
               alt='img'
               className=' w-full h-[400px] small:h-[270px] object-cover top-0 rounded-lg'
               />    
               </div>

     
      <div className=' font-manrope px-1 py-4'>

        <h1 className=' text-4xl font-extrabold'>Agriculture Products</h1>
        <p className=' text-[#878680] text-xs small:text-sm py-2'>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia
        quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
        enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since
        the 1500s.</p>

        <p className=' text-[#878680] text-xs small:text-sm py-2'>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and
        type setting Ipsum take a look at our round. When an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting.</p>
      </div>

      {/* third division   */}

      <div className=' grid grid-cols-2 small:grid-cols-1 gap-5 mt-5'>
        <div>
        <Image
               src={sm1}
               width=''
               height=''
               alt='img'
               className=' w-full small:p-1 object-cover top-0 transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-300 ...'
               />
               <div className=' font-manrope px-1 py-3 small:text-center '>
               <h1 className=' text-[#1F1E17] font-extrabold text-3xl'>Our Benefits</h1>
               <p className=' text-[#878680] pt-3'>It has survived not only five centuries em simply
                  dummy text. Duis aute irure dolor in eprehenderit
                  in voluptate velit esse cillum.</p>    

               </div>
        </div>
        <div>
        <Image
               src={sm2}
               width=''
               height=''
               alt='img'
               className=' w-full small:p-1 object-cover top-0 transition ease-in-out delay-150 
               hover:-translate-y-1 hover:scale-110 duration-300 ...'
               />
                <div className=' font-manrope px-1 py-3 small:text-center '>
               <h1 className=' text-[#1F1E17] font-extrabold text-3xl'>Our Benefits</h1>
               <p className=' text-[#878680] pt-3'>It has survived not only five centuries em simply
                  dummy text. Duis aute irure dolor in eprehenderit
                  in voluptate velit esse cillum.</p>    

               </div>    
        </div>
      
      </div>

      {/* 4 div */}

        <div className=' flex justify-between py-2 mt-8 px-4 mx-2 bg-[#F8F7F0] rounded-lg font-manrope small:text-center
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>

        <h1 className=' text-[#1F1E17] pt-2 font-extrabold'>World’s hottest destinations for vegans</h1>
        <Image
               src={arrow}
               width=''
               height=''
               alt='img'
               className=' w-10 h-10 small:p-1 small:mt-5 object-cover top-0'
               />
        </div>

        <div className=' flex justify-between mt-3 py-2 px-4 mx-2 bg-[#F8F7F0] rounded-lg font-manrope small:text-center
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>

        <h1 className=' text-[#1F1E17] pt-2 font-extrabold'>Let’s grow naturaly and live naturaly</h1>
        
        <Image
       src={arrow}
       width=''
       height=''
       alt='img'
       className=' w-10 h-10 small:p-1 small:mt-5 object-cover top-0'
       />
        </div>

        <p className=' text-[#878680] font-manrope text-base small:text-center px-8 py-4'>Suspendisse finibus urna mauris, vitae consequat quam vel.
         Vestibulum leo ligula, molestieullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi.
        Pellentesque est metus many of some form.</p>

        <div className=' flex justify-between mt-3 py-2 px-4 mx-2 bg-[#F8F7F0] rounded-lg font-manrope small:text-center
        transition ease-in-out delay-150 
        hover:-translate-y-1 hover:scale-110 duration-300 ...'>

        <h1 className=' text-[#1F1E17] pt-2 font-extrabold'>Best vegetables for your healthy hair</h1>
        <Image
       src={arrow}
       width=''
       height=''
       alt='img'
       className=' w-10 h-10 small:p-1 small:mt-5 object-cover top-0'
       />
        </div>
      

      
      </div>
    </div>
  </section>
    </>
  )
}

export default Component