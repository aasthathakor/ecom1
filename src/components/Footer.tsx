import Image from 'next/image'
import logo from '../../public/assets/footer/logo.svg';
import submit from "../../public/assets/footer/submit.svg";
import social from "../../public/assets/footer/social.svg";
import Icon1 from "../../public/assets/footer/Icon1.svg";
import Icon2 from "../../public/assets/footer/Icon2.svg";
import Icon3 from "../../public/assets/footer/Icon3.svg";
import Vector from "../../public/assets/footer/Vector.svg";
import { FaPaperPlane } from "react-icons/fa";


import Link from 'next/link';


const Footer = () => {
  return (
    <>
    <footer className='bg-[#24231D] px-[150px] py-[75px] small:py-[50px] small:px-[30px] medium:px-[50px] medium:py-[80px]'>
      <section>
        <div className=' grid grid-cols-4 gap-[80px] small:grid-cols-1 small:space-y-[30px]  
         small:gap-[30px] medium:grid medium:grid-cols-2 medium:gap-[30px]'>
        <div className='small:flex small:flex-col small:items-center small:text-center'>
          <Link href='/' className='cursor-pointer'>
            <Image src={logo} alt='' width='' height='' />
          </Link>
          <h1 className='text-[rgb(126,126,126)] text-[16px] font-medium mt-[20px]'>There are many variations of passages
of lorem ipsum available, but the
majority suffered.</h1>
            <Link href='/' className='cursor-pointer'>
            <Image src={social} alt='' width='' height='' className=' mt-5' />
          </Link>
        </div>


        <div className='mt-2 small:flex small:flex-col small:items-center'>
          <h1 className='font-bold text-[20px] text-[#FFFFFF]'>Explore</h1>
          <div className=' bg-green-600 h-[2px] w-[50px]'></div>

          <ul className='mt-[20px] text-[16px] text-[#A5A49A] space-y-[20px] small:text-center small:flex small:flex-col small:justify-center small:items-center'>
            <li className='cursor-pointer'>
            <div className=' flex gap-3'>
          <Image src={Vector} alt='' width='' height='' />  
              <Link href='/'>About</Link>
              </div>
            </li>

            <li className='cursor-pointer'>
            <div className=' flex gap-3'>
          <Image src={Vector} alt='' width='' height='' />  
              <Link href='/blog'>Services</Link>
              </div>
            </li>

            <li className='cursor-pointer'>
            <div className=' flex gap-3'>
          <Image src={Vector} alt='' width='' height='' />  
              <Link href='/teespace'>Our Projects</Link>
              </div>
            </li>

            <li className='cursor-pointer'>
            <div className=' flex gap-3'>
          <Image src={Vector} alt='' width='' height='' />  
              <Link href='/teespace'>Meet the Farmers</Link>
              </div>
            </li>

            <li className='cursor-pointer'>
            <div className=' flex gap-3'>
          <Image src={Vector} alt='' width='' height='' />  
              <Link href='/shop'>Latest News</Link>
              </div>
            </li>

            <li className='cursor-pointer'>
            <div className=' flex gap-3'>
          <Image src={Vector} alt='' width='' height='' />  
              <Link href='/shop'>Contact</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className='mt-2 small:flex small:flex-col small:items-center small:text-center'>
          <h1 className='font-bold text-[20px] text-[#FFFFFF]'>News</h1>
          <div className=' bg-green-600 h-[2px] w-[50px]'></div>

          <ul className='mt-[20px] text-[16px] space-y-[20px] small:text-center'>
            <li className='cursor-pointer text-[#FFFFFF]'>Bringing Food Production
Back To Cities</li>
            <li className='cursor-pointer text-[#EEC044]'>July 5, 2022</li>
            <li className='cursor-pointer text-[#FFFFFF]'>The Future of Farming,
Smart Irrigation Solutions</li>
            <li className='cursor-pointer text-[#EEC044]'>July 5, 2022</li>
          </ul>
        </div>
        <div className='mt-2 small:flex small:flex-col small:items-center'>
          <h1 className='font-bold text-[20px] text-[#FFFFFF]'>Contact</h1>
          <div className=' bg-green-600 h-[2px] w-[50px]'></div>
          
          <div className=' flex gap-1'>
          <Image src={Icon1} alt='' width='' height='' className=' pt-5' />
          <p className='mt-[20px] text-[16px] text-[#A5A49A] small:text-center'>
          666 888 0000
          </p>
          </div>

          <div className=' flex gap-1'>
          <Image src={Icon2} alt='' width='' height='' className=' pt-5' />
          <p className='mt-[20px] text-[16px] text-[#A5A49A] small:text-center'>
          needhelp@company.com
          </p>
          </div>

          <div className=' flex gap-1'>
          <Image src={Icon3} alt='' width='' height='' />
          <p className='mt-[20px] text-[16px] text-[#A5A49A] small:text-center'>
          80 broklyn golden street line
          New York, USA
          </p>
          </div>


          <div className='bg-[rgb(255,255,255)] mt-[20px] rounded-lg flex'>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm
             rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-[#4BAF47]
              focus:border-[#4BAF47] bg-[#F8F7F0]
              dark:placeholder-gray-400 dark:text-gray-500 dark:focus:border-[#4BAF47]" 
              placeholder="Your Email Address" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white 
            bg-[#4BAF47] rounded-e-lg border border-[#4BAF47] hover:bg-[#4BAF47] focus:ring-4 focus:outline-none
             focus:ring-[#4BAF47] dark:bg-[#4BAF47] dark:hover:bg-[#4BAF47] dark:focus:ring-[#4BAF47]">
                <FaPaperPlane />
            </button>
        </div>
    </div>
          
          
        </div>
        </div>
      </section>
      </footer>

<section className='flex flex-col lg:flex-row lg:justify-between lg:px-[150px] py-5 small:text-center items-center bg-[#1F1E17] *:'>
            <h1 className='text-[16px] font-medium text-[rgb(126,126,126)]'>© All Copyright 2024 by shawonetc Themes</h1>
            
            <h1 className='text-[16px] font-medium text-[rgb(126,126,126)]'>Terms of Use |  Privacy Policy</h1>
      </section>
    </>
  )
}

export default Footer