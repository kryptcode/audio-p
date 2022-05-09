import Head from 'next/head'
import Categories from '../components/Categories'
import Header from '../components/Home/Header'
import Hero from '../components/Home/Hero'
import YXOneBanner from '../components/Home/YXOneBanner'
import ZXNineBanner from '../components/Home/ZXNineBanner'
import ZXSevenBanner from '../components/Home/ZXSevenBanner'


export default function Home() {
  return (
    <div className='font-main'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Categories />
      <ZXNineBanner />
      <ZXSevenBanner />
      <YXOneBanner />
    </div>
  )
}
