import React from 'react'
import { useRouter } from 'next/router'

const Banner = ({ img, title, text, slug, rev }) => {
    const route = useRouter()
  return (
    <div className={`w-[95%] md:w-[85%] mx-auto flex flex-col mb-4 ${rev ? 'md:flex-row-reverse' : 'md:flex-row'} items-center space-x-0 md:space-x-10`}>
        <div className='flex-1'>
            <img src={img} alt="" />
        </div>
        <div className='flex-1 text-center md:text-left'>
            <h5 className='uppercase text-lg tracking-[0.3em] text-[#d87d4a] mb-6'>
                new product
            </h5>
            <h2 className='uppercase text-4xl font-bold w-full md:w-2/3 tracking-wide mb-8'>
                {title}
            </h2>
            <p className='text-gray-600 font-semibold w-full md:w-[80%] mb-9'>
            {text}
            </p>
            <button 
                className='bg-[#d87d4a] py-2 px-5 text-white font-semibold uppercase text-sm hover:opacity-80 transition duration-200 ease-linear'
                onClick={() => route.push(`/products/${slug}`)}
            >
                see product
            </button>
        </div>
    </div>
  )
}

export default Banner

