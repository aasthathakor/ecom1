'use client';
import Link from 'next/link';
import React, { use, useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import logo from '../../public/assets/headerphoto/logo.svg';
import { FaMapMarkerAlt, FaTwitter, FaFacebook, FaPinterestP, FaInstagram, FaSearch } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import Home from '@/app/Home/page';
import About from '@/app/About/page';
import List from '@/app/List/page';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    
    <>

    <div className=' bg-white lg:top-6 sm:top-0 md:top-0 w-full z-20'>
      <div className=' container flex justify-between items-center small:px-5 lg:px-60 py-4'>
        <div className=''>

    <Link className='' href='/Home'>
          <Image src={logo}
          height={50}
          width={170}
          alt='Picture of the logo'
          layout=' responsive'
          className=' flex w-full small:h-[40px] transition ease-in-out delay-150 pr-4 hover:-translate-y-1
          hover:scale-110  duration-300 ...' />
          </Link>
          </div>

        

          <div className=' hidden md:flex gap-10 tracking-wider  text-gray-600 '>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>Home</Link>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>About</Link>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>Services</Link>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>Projects</Link>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>News</Link>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>Shop</Link>
              <Link href='/' className='hover:text-[#1F1E17] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... '>Contact</Link>
          </div>

          
            <div className=' hidden lg:flex  gap-5 text-black'>
              <FaSearch className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...' />
              <LuShoppingCart className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...' />
             </div>
              
              {toggle ? (

                <IoMdClose
                 onClick={()=>setToggle(!toggle)}
                size={30} className=' md:hidden block text-black' />   
              ) : (
                <IoMdMenu  
                onClick={()=>setToggle(!toggle)} 
                size={30} className=' md:hidden block text-black' />
              )}

        {/* toggle */}

        <div className={`md:hidden duration-700 text-center pt-14 flex flex-col font-bold w-[70%]
         h-[75%] fixed gap-7 bg-black/90 text-white top-[0px] z-50
         ${toggle ?  "left-0": "left-[-100%]" } `}>
          
            <Link href='/Home' className='hover:text-[#1F1E17]'>Home</Link>
              <Link href='/About' className='hover:text-[#1F1E17]'>About</Link>
              <Link href='/List' className='hover:text-[#1F1E17]'>Services</Link>
              <Link href='/' className='hover:text-[#1F1E17]'>Projects</Link>
              <Link href='/' className='hover:text-[#1F1E17]'>News</Link>
              <Link href='/' className='hover:text-[#1F1E17]'>Shop</Link>
              <Link href='/' className='hover:text-[#1F1E17]'>Contact</Link>
          </div>

        </div>
    </div>
    </>
  )
}

export default Navbar