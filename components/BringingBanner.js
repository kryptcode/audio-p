import React from 'react'

const BringingBanner = () => {
  return (
    <div className='w-[95%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row my-6 space-x-0 md:space-x-5 space-y-8 md:space-y-0'>
        <div className='flex-1 flex flex-col justify-center text-center md:text-left'>
            <h3 className='font-bold text-4xl tracking-wider w-full md:w-[78%] pt-6 uppercase mb-12'>
                Bringing you the <span className='text-[#d87d4a]'>best</span> audio gear 
            </h3>
            <p className='text-gray-500 w-full md:w-[90%] ' >
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
        </div>
        <div className='flex-1'>
            <img src="https://audiophile-gamma.vercel.app/assets/shared/desktop/image-best-gear.jpg" className='w-full rounded-md' alt="" />
        </div>
    </div>
  )
}

export default BringingBanner