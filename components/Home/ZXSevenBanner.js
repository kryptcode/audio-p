import React from 'react'

const ZXSevenBanner = () => {
  return (
    <div className="bg-[url('https://audiophile-gamma.vercel.app/assets/home/desktop/image-speaker-zx7.jpg')] w-[90%] md:w-[85%] mx-auto py-16 md:py-24 rounded-md bg-center bg-cover">
        <div className='pl-10 space-y-6'>
            <h3 className='text-3xl font-semibold tracking-wider'>
                ZX7 SPEAKER
            </h3>
            <button className='border border-black text-sm py-1.5 px-3 font-semibold transition duration-200 ease-in hover:bg-black hover:text-white'>
                SEE PRODUCT
            </button>
        </div>
    </div>
  )
}

export default ZXSevenBanner