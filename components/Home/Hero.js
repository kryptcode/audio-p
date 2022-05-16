import {useRouter} from 'next/router'

const Hero = () => {
  const router = useRouter()
  return (
    <div className="bg-[url('https://github.com/MarekBombera/audiophile/blob/main/public/assets/home/mobile/image-hero.jpg?raw=true')] md:bg-[url('https://audiophile-gamma.vercel.app/assets/home/desktop/image-hero.jpg')] bg-center bg-contain">
        <div className='bg-white/30 h-[1px]  w-[95%] md:w-[85%] mx-auto mb-3 ' />
        <div className='w-[95%] md:w-[85%] mx-auto py-40 md:py-32 text-center md:text-left'>
          <h5 className='uppercase text-white/50 tracking-[0.4em] text-md'>
            new product
          </h5>
          <h1 className='text-white text-4xl md:text-6xl uppercase font-semibold w-full md:w-[50%] mt-8 mb-5'>
            XX99 Mark II HeadphoneS
          </h1>
          <p className='w-full md:w-[32%]  text-white/70 mb-7'>
          Experience natural, life-like audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button
            className='text-white py-2 px-5 bg-[#d87d4a] uppercase tracking-widest text-sm font-semibold hover:opacity-60 transition duration-200 ease-in'
            onClick={() => router.push('/products/xx99-headphone')}
          >
            see product
          </button>
        </div>
    </div>
  )
}

export default Hero
