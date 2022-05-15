import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Cart from './Cart';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false)

  const router = useRouter()
  return (
    <div className='text-gray-300 bg-black sticky top-0 z-10'>
      <div className='w-[95%] md:w-[85%] mx-auto flex justify-between items-center py-7' >
        <div 
          className='cursor-pointer hover:opacity-80 transition duration-200 flex md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon className='h-6' />
        </div>
        <div onClick={() => router.push('/')} className='cursor-pointer'>
            <img src="https://audiophile-gamma.vercel.app/assets/shared/desktop/logo.svg" alt="audiophile" />
        </div>

        <div className='hidden md:flex space-x-10 uppercase font-semibold text-[13px] '>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear' onClick={() => router.push('/')}>Home</p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear' onClick={() => router.push('/headphones')}>Headphones</p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear' onClick={() => router.push('/speakers')}>speakers</p>
            <p className='hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear' onClick={() => router.push('/earphones')}>earphones</p>
        </div>

        <div>
          <ShoppingCartIcon className='h-6 hover:text-[#d87d4a] cursor-pointer transition duration-200 ease-linear'onClick={() => setShowCart(!showCart)} />
        </div>
      </div>

      {
        isOpen && (
          <div className="bg-white text-black h-[90vh] text-2xl font-semibold uppercase text-center pt-24 space-y-10 block md:hidden">
            <p
              className='cursor-pointer hover:underline'
              onClick={() => router.push('/')}
            >
              Home
            </p>
            <p
              className='cursor-pointer hover:underline'
              onClick={() => router.push('/headphones')}
            >
              Headpones
            </p>
            <p
              className='cursor-pointer hover:underline'
              onClick={() => router.push('/speakers')}
            >
              Speakers
            </p>
            <p
              className='cursor-pointer hover:underline'
              onClick={() => router.push('/earphones')}
            >
              Earphones
            </p>
          </div>
        )
      }

      {
        showCart && <Cart setShowCart={setShowCart} />
      }
    </div>
  )
}

export default Header