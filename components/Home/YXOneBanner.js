import React from 'react'

const YXOneBanner = () => {
  return (
    <div className='w-[95%] md:w-[85%] mx-auto my-8 flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-10'>
        <div className='flex-1'>
            <img src="https://audiophile-gamma.vercel.app/assets/home/desktop/image-earphones-yx1.jpg" className='w-full rounded-md' alt="" />
        </div>
        <div className='p-6 pt-14 bg-gray-300/80 flex-1 rounded-md'>
            <h4 className='text-3xl font-semibold tracking-wider mb-6'>
                YX1 EARPHONES
            </h4>
            <button className='border border-black text-sm py-2 px-4 font-semibold transition duration-200 ease-in hover:bg-black hover:text-white'>
                SEE PRODUCT
            </button>
        </div>
    </div>
  )
}

export default YXOneBanner