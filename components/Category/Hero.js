import React from 'react'

const Hero = ({ title }) => {
  return (
    <div className='uppercase font-bold text-4xl py-24 mb-12 text-white bg-black text-center'>
        {title}
    </div>
  )
}

export default Hero