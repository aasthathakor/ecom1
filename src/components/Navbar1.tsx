'use client';
import { FaTwitter, FaFacebook, FaPinterestP, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import locat from '../../public/assets/headerphoto/locat.svg';
import email from '../../public/assets/headerphoto/email.svg';
import Link from 'next/link';




const Navbar1 = () => {
  return (
    <>
    
    <nav className=" small:hidden font-medium flex flex-col text-center sm:flex-row sm:text-left sm:justify-between
     bg-[#4BAF47] py-3 px-52 medium:px-12 shadow sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0 flex gap-3">
  <Image src={locat} alt='' width='' height='' />
    <a href="#" className=" text-xs no-underline text-[#FFFFFF] hover:text-blue-dark">88 Road Broklyn Golden Street. New York</a>
    <Image src={email} alt='' width='' height='' />  
    <a href="#" className=" text-xs no-underline text-[#FFFFFF] hover:text-blue-dark">support@agrios.com</a>
  </div>

  <div className=' flex text-[#FFFFFF] gap-4'>
              <FaTwitter />
              <FaFacebook />
              <FaPinterestP />
              <FaInstagram />
  </div>
</nav>
    
    </>
  )
}

export default Navbar1