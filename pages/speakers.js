import Head from 'next/head'
import BringingBanner from '../components/BringingBanner'
import Categories from '../components/Categories'
import Banner from '../components/Category/Banner'
import Hero from '../components/Category/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'

const speakers = ({ result }) => {
  return (
    <div className='font-main'>
        <Head>
            <title>Audiophile | Speakers</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className='bg-black pb-3' >
        <div className='bg-white/30 h-[1px]  w-[95%] md:w-[85%] mx-auto  ' />
        </div>
        <Hero title='speakers' />
        <Banner 
            img={'https://audiophile-gamma.vercel.app/assets/product-zx9-speaker/desktop/image-product.jpg'}
            title={'ZX9 Speakers'}
            text={'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'}
            slug={result[0].slug}
        />
        <Banner 
            img={'https://audiophile-gamma.vercel.app/assets/product-zx7-speaker/desktop/image-product.jpg'}
            title={'ZX7 Speaker'}
            text={'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'}
            slug={result[1].slug}
            rev
        />
        <Categories />
        <BringingBanner />
        <Footer />
    </div>
  )
}

export default speakers

export async function getServerSideProps() {
  const data = await fetch('https://jsonkeeper.com/b/S9OG').then(res => res.json())

  const result = data.filter((product) => product.category === "speakers") 

  return {
      props: {
          result,
      }
  } 
}