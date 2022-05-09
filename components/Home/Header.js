import React from 'react'
import { useRouter } from 'next/router'
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Header = () => {
  const router = useRouter()
  return (
    <div className='text-gray-300 bg-black sticky top-0 z-10'>
      <div className='w-[95%] md:w-[85%] mx-auto flex justify-between items-center py-7' >
        <div className='cursor-pointer hover:opacity-80 transition duration-200 flex md:hidden'>
          <MenuIcon className='h-6' />
        </div>
        <div onClick={() => router.push('/')}>
            <img src="https://audiophile-gamma.vercel.app/assets/shared/desktop/logo.svg" alt="audiophile" />
        </div>

        <div className='hidden md:flex space-x-10 uppercase font-semibold text-[13px] '>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>Home</p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>Headphones</p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>speakers</p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'>earphones</p>
        </div>

        <div>
          <ShoppingCartIcon className='h-6 hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear' />
        </div>
      </div>
    </div>
  )
}

export default Header