import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { useRouter } from 'next/router'

const Categories = () => {
    const router = useRouter()
  return (
    <div className='py-40'>
        <div className='w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row space-y-40 md:space-y-0 space-x-0 md:space-x-16'>
            <div className='relative bg-black/10 flex-1 pt-24 pb-5 rounded-md'>
                <img src="https://audiophile-gamma.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Fimage-category-thumbnail-headphones.png&w=256&q=75" alt="" className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]' />
                <h5 className='text-center uppercase font-semibold'>
                    headphones
                </h5>
                <div className='flex justify-center items-center space-x-2 hover:text-[#d87d4a] cursor-pointer mt-2' onClick={() => router.push('/headphones')}>
                    <p className='uppercase text-gray-500 font-semibold text-center'>
                        shop
                    </p>
                    <ChevronRightIcon className='h-4 text-[#d87d4a]' />
                </div>
            </div>
            <div className='relative bg-black/10 flex-1 pt-24 pb-5 rounded-md'>
                <img src="https://audiophile-gamma.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Fimage-category-thumbnail-speakers.png&w=256&q=75" alt="" className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]' />
                <h5 className='text-center uppercase font-semibold'>
                    speakers
                </h5>
                <div className='flex justify-center items-center space-x-2 hover:text-[#d87d4a] cursor-pointer mt-2' onClick={() => router.push('/speakers')}>
                    <p className='uppercase text-gray-500 font-semibold text-center'>
                        shop
                    </p>
                    <ChevronRightIcon className='h-4 text-[#d87d4a]' />
                </div>
            </div>
            <div className='relative bg-black/10 flex-1 pt-24 pb-5 rounded-md'>
                <img src="https://audiophile-gamma.vercel.app/_next/image?url=%2Fassets%2Fshared%2Fdesktop%2Fimage-category-thumbnail-earphones.png&w=256&q=75" alt="" className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%]' />
                <h5 className='text-center uppercase font-semibold'>
                    earphones
                </h5>
                <div className='flex justify-center items-center space-x-2 hover:text-[#d87d4a] cursor-pointer mt-2' onClick={() => router.push('/earphones')}>
                    <p className='uppercase text-gray-500 font-semibold text-center'>
                        shop
                    </p>
                    <ChevronRightIcon className='h-4 text-[#d87d4a]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories