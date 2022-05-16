import { useContext } from 'react'
import CartContext from '../../context'
import CartItem from './CartItem';

const Cart = ({ setShowCart }) => {
  const { cart, removeAll } = useContext(CartContext);

  return (
    <div className='bg-white text-black absolute top-24 right-5 p-5 rounded-md'>
      <div className='flex items-center space-x-32 pb-6 '>
        <p className='text-xl font-semibold'>
          Cart ({cart.length})
        </p>
        <p className='text-gray-500 cursor-pointer' onClick={() => removeAll()}>
          remove all
        </p>
      </div>
      <div className='h-60 overflow-y-scroll'>
        {/* Task items */}
        {cart.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className='flex justify-between'>
        <p className='text-gray-600'>
          TOTAL
        </p>
        <p className='font-semibold text-xl'>
          ${' '}
          {
            cart.length !== 0 ?
            cart.map((val) =>  val.product.price * val.amount).reduce((a, b) => a+b).toLocaleString('us') : 0
          }
        </p>
      </div>
      <button className='text-white py-4 rounded-md pt-4 px-5 bg-[#d87d4a] uppercase tracking-widest text-sm font-semibold hover:opacity-60 transition duration-200 ease-in w-full' onClick={() => setShowCart(false)}>
        Checkout
      </button>
    </div>
  )
}

export default Cart