import { useContext } from 'react'
import CartContext from '../../context'

const CartItem = ({ item: { product: { cartName, price, image, id }, amount }}) => {
    const { increment, decrement } = useContext(CartContext);

  return (
    <div className='flex justify-between items-center'>
        <div className='flex space-x-3'>
            <div>
                <img src={image.mobile} alt="" className='w-16 h-16' />
            </div>
            <div className='flex flex-col space-y-3'>
              <p className='text-lg font-semibold'>
                {cartName}
              </p>
              <p>
                $ {' '} {price}
              </p>
            </div>
        </div>
        <div className='flex space-x-6 items-center p-2 bg-gray-400/40 text-lg'>
                    <span className='cursor-pointer text-gray-800' onClick={() => decrement(id)}>
                        -
                    </span>
                    <span>
                        {amount}
                    </span>
                        <span className='cursor-pointer text-gray-800' onClick={() => increment(id)}>
                        +
                    </span>
        </div>
    </div>
  )
}

export default CartItem