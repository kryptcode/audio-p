import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='w-[95%] md:w-[85%] mx-auto text-white py-7 '>
            <div className='flex flex-col md:flex-row justify-between items-center mb-6 space-y-6 md:space-y-0'>
                <div>
                    <img src="https://audiophile-gamma.vercel.app/assets/shared/desktop/logo.svg" alt="" />
                </div>
                <div className='flex flex-col md:flex-row space-x-0 text-center md:text-left md:space-x-10 space-y-3 md:space-y-0 font-semibold tracking-wider '>
                    <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>HOME</p>
                    <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>HEADPHONES</p>
                    <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>SPEAKERS</p>
                    <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>EARPHONES</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row text-center md:text-left justify-between gap-8 mb-8'>
                <div className='text-gray-500 flex-1 font-semibold'>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
                </div>
                <div className='flex-1'>
                    {/* Social icons */}
                </div>
            </div>
            <div className='text-gray-500 text-center md:text-left'>
            Copyright 2021. All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer