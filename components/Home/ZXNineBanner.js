import { useRouter } from 'next/router'

const ZXNineBanner = () => {
    const router = useRouter()
  return (
    <div className='py-12'>
        <div className='w-[95%] md:w-[85%] mx-auto bg-[#d87d4a] flex flex-col md:flex-row space-x-0 md:space-x-16 space-y-6 md:space-y-0 pt-10 px-12 rounded-md'>
            <div className='flex-1 flex flex-col justify-end items-center md:items-end '>
                <img src="https://audiophile-gamma.vercel.app/assets/home/desktop/image-speaker-zx9.png" className='w-[80%] bottom-2 md:hidden flex' alt="" />
                <img src="https://i.ibb.co/QjbKNp2/image-speaker-zx9.png" className='w-[80%] bottom-2 md:flex hidden' alt="" />
            </div>
            <div className='p-5 flex-1 text-center md:text-left'>
                <h2 className='text-white text-5xl uppercase font-bold w-full md:w-[70%] tracking-wider mb-6'>
                    zx9 speakers
                </h2>
                <p className='text-white w-full md:w-[70%] mb-5'>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <button className='bg-black text-white py-2 px-4 uppercase text-sm font-semibold tracking-wider transition duration-200 ease-linear hover:opacity-70' onClick={() => router.push('/products/zx9-speaker')}>
                    see product
                </button>
            </div>
        </div>
    </div>
  )
}

export default ZXNineBanner