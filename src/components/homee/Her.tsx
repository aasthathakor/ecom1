import React from 'react'
import Image from 'next/image'
import exchange from '../../../public/assets/headerphoto/exchange.svg';
import store from '../../../public/assets/headerphoto/store.svg';
import truck from '../../../public/assets/headerphoto/truck.svg';

const Her = () => {
  return (
   <>

<div className="relative flex flex-row medium:flex  medium:flex-col-2 justify-center lg:-mt-[50px] lg:z-[1]">

    <div className='flex flex-col items-center medium:mt-5 small:mt-2 lg:flex-row justify-between bg-[#FFFFFF] 
    px-8 py-6 shadow rounded-lg w-auto h-auto gap-5'>

        <div className="flex items-center mb-0 w-auto h-auto">
            <Image src={exchange} height='' width='' alt='return image' />
            <div className='pl-4 lg:pl-8'>
                <strong className="text-lg lg:text-xl">Return Policy</strong>
                <h1 className='text-[#878680] text-sm lg:text-base'>Money Back Guarantee</h1>
            </div>
        </div>

        <div className="flex items-center mb-0 w-auto h-auto">
            <Image src={truck} height='' width='' alt='return image' />
            <div className='pl-4 lg:pl-8'>
                <strong className="text-lg lg:text-xl">Free Shipping</strong>
                <h1 className='text-[#878680] text-sm lg:text-base'>On All Orders Over $45.00</h1>
            </div>
        </div>

        <div className="flex items-center mb-0 w-auto h-auto">
            <Image src={store} height='' width='' alt='return image' />
            <div className='pl-4 lg:pl-8'>
                <strong className="text-lg lg:text-xl">Store Locator</strong>
                <h1 className='text-[#878680] text-sm lg:text-base'>Find Your Nearest Store</h1>
            </div>
        </div>

    </div>

</div>

   </>
  )
}

export default Her