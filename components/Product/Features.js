import React from 'react'

const Features = ({ text, includes }) => {
  return (
    <div className='w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row space-x-0 md:space-x-12 mb-8 '>
        <div className='flex-[1.7]'>
            <h2 className='text-3xl font-bold py-4'>
                FEATURES
            </h2>
            <p className='text-gray-600'>
                {text}
            </p>
        </div>

        <div className='flex-[1]'>
            <h2 className='text-3xl font-bold py-4'>
                IN THE BOX
            </h2>
            <div className='space-y-3'>
            {
                includes.map((item) => (
                    <div className='space-x-3'>
                            <span className='text-[#d87d4a] font-semibold '>
                                {item.quantity}x
                            </span>
                            <span className='text-gray-600'>
                                {item.item}
                            </span>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Features