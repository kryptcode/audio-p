import React from 'react'

const Cards = ({ img1, img2, img3, img3b }) => {
  return (
    <div className='w-[95%] md:w-[85%] mx-auto mt-24 mb-16 flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10 space-x-0'>
        <div className='flex flex-col justify-between space-y-5 md:space-y-0'>
            <div>
                <img src={img1} alt="" className='rounded-lg' />
            </div>
            <div>
                <img src={img2} alt="" className='rounded-lg' />
            </div>
        </div>
        <div>
            <img src={img3} alt="" className='rounded-lg hidden md:flex' />
            <img src={img3b} alt="" className='rounded-lg md:hidden flex h-40 w-full object-cover' />
        </div>
    </div>
  )
}

export default Cards