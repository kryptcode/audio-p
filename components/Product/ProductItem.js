import { useState } from 'react'

const ProductItem = ({ img, title, text, price }) => {
    const [counter, setCounter] = useState(1)

    const increment = () => {
        setCounter(amount + 1);
      };
    
      const decrement = () => {
        counter > 1 && setCounter(counter - 1);
      };
    
  return (
    <div className='w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-10 space-y-10 md:space-y-0 py-12'>
        <div className='flex-1'>
            <img src={img} alt="" />
        </div>
        <div className='flex-1'>
            <h5 className='uppercase text-lg tracking-[0.3em] text-[#d87d4a] mb-6'>
                new product
            </h5>
            <h2 className='uppercase text-4xl font-bold w-full md:w-2/3 tracking-wide mb-8'>
                {title}
            </h2>
            <p className='text-gray-600 font-semibold w-full md:w-[80%] mb-9'>
            {text}
            </p>
            <h6 className='text-xl font-semibold mb-7 tracking-wider'>
                ${price.toLocaleString('us')}
            </h6>
            <div className='flex space-x-8 items-center'>
                <div className='flex space-x-6 items-center p-2 bg-gray-400/40 text-lg'>
                    <span className='cursor-pointer text-gray-800' onClick={decrement}>
                        -
                    </span>
                    <span>
                        {counter}
                    </span>
                        <span className='cursor-pointer text-gray-800' onClick={increment}>
                        +
                    </span>
                </div>
                <button className='bg-[#d87d4a] py-2 px-5 text-white font-semibold uppercase text-lg hover:opacity-80 transition duration-200 ease-linear'>
                    add to cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem