import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Frame from '../../../public/assets/list/Frame.svg';
import Article from '../../../public/assets/ourblog/Article.svg';
import message from '../../../public/assets/ourblog/message.svg';
import Linku from '../../../public/assets/ourblog/Linku.svg';
import Link1 from '../../../public/assets/ourblog/Link1.svg';
import Link2 from '../../../public/assets/ourblog/Link2.svg';
import Link3 from '../../../public/assets/ourblog/Link3.svg';
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import news6 from '../../../public/assets/ourblog/news6.svg';
import news5 from '../../../public/assets/ourblog/news5.svg';
import news4 from '../../../public/assets/ourblog/news4.svg';






const Component1 = () => {
  return (
    <>

{/* For banner */}
<div className="relative w-full py-5">
    <Image
               src={Frame}
               width=''
               height=''
               alt='img'
               className='h-64 small:h-[200px] w-full object-cover'
               />    
    <div className="absolute inset-0 flex flex-col items-center text-center justify-center">
    <Link className="text-[#FFFFFF] text-xs font-semibold font-manrope hover:cursor-pointer small:text-[10px]" 
    href='/Home'>HOME / The Future of Farming, Smart Irrigation Solutions</Link>
        <h2 className="text-[#FFFFFF] text-5xl small:text-5xl medium:text-5xl font-manrope 
        font-extrabold mt-1 hover:cursor-pointer">Latest News</h2>
    </div>
</div>

{/* For more division */}

<div className=' grid grid-cols-3 small:grid-cols-1 gap-5 py-24 mx-60 small:gap-3 small:py-6 small:mx-4 medium:mx-8 medium:py-14'>
    
    <div className=' bg-[#FFFFFF] col-span-2'>
        

        <Image
               src={Article}
               width=''
               height=''
               alt='img'
               className='w-full rounded-lg object-cover top-0'
               />

        <div className=' absolute -mt-[60px] ml-5 bg-[#4BAF47] w-[134px] h-[40px] small:w-24 small:h-6 small:-mt-[40px] small:ml-3
         small:px-1 small:py-0 small:text-sm medium:w-24 medium:h-8 medium:-mt-[40px] medium:ml-3
         medium:px-1 medium:py-1 medium:text-sm 
          text-[#FFFFFF] px-4 py-2 '>05 July 2022</div>
        
        <div className=' flex pt-8 small:pt-1 small:mx-1 small:text-sm medium:pt-1'>
        <IoMdContact className ="text-[#EEC044] mt-1 mr-1" />
        <h1 className=' text-[#878680]'>by Kevin Martin</h1>
        <Image
               src={message}
               width=''
               height=''
               alt='img'
               className='w-14 h-6 pl-6 small:w-12 small:h-5'
               />
               <h1 className=' text-[#878680]'>0 comments</h1>

        </div>

        <div className=' font-manrope small:text-center small:px-0'>
            <h1 className=' text-[28px] small:text-[20px] py-1 font-extrabold text-[#1F1E17]'>The Future of Farming, Smart Irrigation Solutions</h1>

            <p className=' text-[#878680]'>
            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
sure there isn’t anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the
Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
structures, to generate Lorem Ipsum which looks reasonable.
            </p>

            <p className='text-[#878680] py-5'>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type simen book. It has survived not only five
centuries, but also the leap into electronic typesetting.
            </p>

            <p className=' text-[#878680]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has been the
industry’s standard dummy text ever since the when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
into unchanged.
            </p>
    <hr className="h-px my-8 bg-[#ECE7E2] border-[1px]"></hr>
        
        </div>

        <div className=' overflow-auto font-manrope flex justify-between small:flex-col medium:flex-col medium:space-y-3 medium:items-center small:items-center'>
           
            <div className=' flex gap-2 small:gap-1'> 
            <h1 className='font-extrabold text-[18px] pt-1 small:pt-2'>Tags</h1>
            <button className=' bg-[#4BAF47] text-[#FFFFFF] font-bold px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Harvest
          </button>
          <button className=' bg-[#4BAF47] text-[#FFFFFF] font-bold px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Vagetables
          </button>
            </div>

            <div className=' flex gap-2'>
            <Image
               src={Linku}
               width=''
               height=''
               alt='img'
               className=''
               />
                 <Image
               src={Link1}
               width=''
               height=''
               alt='img'
               className=''
               />
                 <Image
               src={Link2}
               width=''
               height=''
               alt='img'
               className=''
               />
                 <Image
               src={Link3}
               width=''
               height=''
               alt='img'
               className=''
               />

            </div>

        </div>

        <div className=' grid grid-cols-2 small:grid-cols-1 medium:grid-cols-2 medium:space-x-3 py-10
         small:items-center space-x-1 small:space-x-0 small:space-y-3'>
           
            <div className=' w-full flex items-center rounded-xl bg-[#F8F7F0] h-[169px] small:h-[120px]'>
                <h1 className='text-[#1F1E17] font-manrope font-extrabold py-5 small:py-9 medium:py-11
             px-7 text-xl small:text-base medium:text-base'>Agronomy and relation to Other Sciences</h1>
            {/* <p className=' text-[#1F1E17] font-manrope font-extrabold text-center py-5 small:py-9 medium:py-11
             px-7 text-xl small:text-base medium:text-base'>Agronomy and relation to Other Sciences</p>               */}
            </div>
            <div className=' w-full flex items-center rounded-xl bg-[#F8F7F0] h-[169px] small:h-[120px]'>
                <h1 className=' text-[#1F1E17] font-manrope font-extrabold py-5 small:py-9 medium:py-11 
            px-7 text-xl small:text-base medium:text-base'>Bringing Food Production Back To Cities</h1>
            {/* <p className=' text-[#1F1E17] font-manrope font-extrabold text-center py-5 small:py-9 medium:py-11 
            px-7 text-xl small:text-base medium:text-base'>Bringing Food Production Back To Cities</p> */}
            </div>
            </div>

            <h1 className=' text-[#1F1E17] font-extrabold text-[26px] small:text-[20px] small:text-center'>Leave a Comment</h1>
            <div className="flex mt-5">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#4BAF47] bg-[#4BAF47]
             border-[#4BAF47] rounded focus:ring-[#4BAF47] dark:focus:ring-[#4BAF47] dark:ring-offset-[#4BAF47]
              focus:ring-2 dark:bg-[#4BAF47] dark:border-[#4BAF47]"></input>
            <label for="default-checkbox" className="ms-2 text-sm font-medium text-[#878680]">
            Save my name, email, and website in this browser for the next time I comment.</label>
            </div>


            <div className=' grid grid-cols-2 small:grid-cols-1 medium:grid-cols-2 medium:space-x-3 py-3
         small:items-center space-x-1 small:space-x-0 small:space-y-3'>
           
            <div className=' w-full rounded-xl bg-[#F8F7F0] h-[50px] small:h-[30px]'>
            <p className=' text-[#878680] font-manrope font-medium py-4 small:py-1 px-8 small:px-5 text-sm small:text-sm'>Full Name</p>              
            </div>
            <div className=' w-full rounded-xl bg-[#F8F7F0] h-[50px] small:h-[30px]'>
            <p className=' text-[#878680] font-manrope font-medium py-4 small:py-1 px-8 small:px-5 text-sm small:text-sm'>Email Address</p>
            </div>
            </div>

            <div className=' grid grid-cols-1 w-full rounded-xl bg-[#F8F7F0] h-[200px] small:h-[100px]'>
            <p className=' text-[#878680] font-manrope font-medium py-5 small:py-1 px-8 small:px-5 text-sm small:text-sm'>Write Comment</p>              
            </div>

            <button className=' bg-[#4BAF47] mt-6 small:mt-5 text-[#FFFFFF] font-bold px-4 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2 lg:px-14 lg:py-5 text-sm 
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Post Comment
          </button>
    </div>



    <div className=' bg-[#FFFFFF] col-span-1 space-y-5'>
    

    <div className="mt-0 space-y-5 relative ">
    <input className="w-full py-4 px-4 border bg-[#EEC044] text-[#FFFFFF] rounded-md shadow-sm focus:outline-none" 
    type="search" placeholder="Search here....">
    </input>
        <div className=' absolute top-0 pl-72 small:hidden text-[#FFFFFF]'>
        <FaSearch />
        </div>
    </div>

    <div className=' w-full bg-[#F8F7F0] font-manrope py-5 px-5 rounded-lg '>
        <h1 className=' text-[#1F1E17] text-xl font-extrabold'>Latest Posts</h1>

        <div className='flex flex-col items-center small:mt-2 justify-between py-6 rounded-lg w-full gap-5'>

        <div className="flex grid-cols-1 items-center mb-0 w-full medium:grid medium:grid-cols-1">
            <Image src={news6} height='' width='' alt='return image' className='rounded-lg medium:ml-5' />
            <div className='pl-4 lg:pl-5'>
                
                <div className=' flex'>
            <IoMdContact className ="text-[#EEC044] mt-1 mr-1" />
                <h1 className='text-[#878680] text-sm lg:text-[14px]'>by Kevin Martin</h1>
                </div>
                <strong className="text-[#1F1E17] text-[14px] font-extrabold">Bringing Food Production Back To Cities</strong>
            </div>
        </div>

        <div className="flex items-center mb-0 w-full medium:grid medium:grid-cols-1 bg-white rounded-lg">
            <Image src={news5} height='' width='' alt='return image' className='rounded-lg medium:ml-5' />
            <div className='pl-4 lg:pl-5'>
                <div className=' flex'>
            <IoMdContact className ="text-[#EEC044] mt-1 mr-1" />
                <h1 className='text-[#878680] text-sm g:text-[14px]'>by Kevin Martin</h1>
                </div>
                <strong className="text-[#1F1E17] text-[14px] font-extrabold">The Future of Farming,
Smart Irrigation Solutions</strong>
            </div>
        </div>

        <div className="flex items-center mb-0 w-full medium:grid medium:grid-cols-1">
            <Image src={news4} height='' width='' alt='return image' className='rounded-lg medium:ml-5' />
            <div className='pl-4 lg:pl-5'>
                <div className=' flex'>

            <IoMdContact className ="text-[#EEC044] mt-1 mr-1" />
                <h1 className='text-[#878680] text-sm g:text-[14px]'>by Kevin Martin</h1>
                </div>
                <strong className="text-[#1F1E17] text-[14px] font-extrabold">Agronomy and relation to
Other Sciences</strong>
            </div>
        </div>

    </div>

    </div>

    <div className=' bg-[#F8F7F0] py-8 mx-1 medium:mx-1 rounded-lg space-y-3 lg:pl-7 medium:pl-7 small:text-center'>
            <h1 className=' text-[#1F1E17] font-manrope font-extrabold text-xl'>Categories</h1>
            <h1 className=' text-[#878680] font-manrope font-medium text-[16px]'>Agriculture Products</h1>
            <h1 className=' text-[#878680] font-manrope font-medium text-[16px]'>Organic Products</h1>
            <h1 className=' text-[#878680] font-manrope font-medium text-[16px]'>Fresh Vegetables</h1>
            <h1 className=' text-[#878680] font-manrope font-medium text-[16px]'>Dairy Products</h1>
            <h1 className=' text-[#878680] font-manrope font-medium text-[16px]'>Harvest</h1>
        </div>



        <div className=' bg-[#F8F7F0]'>
            <h1 className=' text-[#1F1E17] mx-10 pt-7 font-manrope font-medium text-xl small:text-center'>Tags</h1>
           
            <div className='grid grid-cols-2 small:grid-cols-1 small:flex small:flex-col small:items-center medium:grid medium:grid-cols-1 py-10 mx-1 medium:mx-1 rounded-lg space-y-3
             lg:pl-7 medium:pl-7 small:text-center'>

            <button className='bg-[#FFFFFF] flex-col items-center text-[#1F1E17] font-bold w-[100px] h-10    px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Agriculture
          </button>
          <button className=' bg-[#FFFFFF] flex-col items-center text-[#1F1E17] font-bold w-[100px] px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Farming
          </button>
          <button className=' bg-[#FFFFFF] flex-col items-center text-[#1F1E17] font-bold w-[100px] px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Harvest
          </button>
          <button className=' bg-[#FFFFFF] flex-col items-center text-[#1F1E17] font-bold w-[100px] px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Organic
          </button>
          <button className=' bg-[#FFFFFF] flex-col items-center text-[#1F1E17] font-bold w-[100px] px-3 py-2 rounded-[12px] flex small:mx-2 small:my-2
           medium:px-2 medium:py-2 small:px-2 small:py-2  text-sm transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            Vegetables
          </button>
          </div>
    
        </div>




        
    </div>

</div>


    </>
  )
}

export default Component1