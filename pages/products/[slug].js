import Head from 'next/head'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import BringingBanner from '../../components/BringingBanner'
import Footer from '../../components/Footer'
import Cards from '../../components/Product/Cards'
import Features from '../../components/Product/Features'
import PrevBtn from '../../components/Product/PrevBtn'
import ProductItem from '../../components/Product/ProductItem'
import Recommendations from '../../components/Product/Recommendations'

const productPage = ({ title, product }) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <PrevBtn />
        <ProductItem product={product}  />
        <Features text={product.features} includes={product.includes} />
        <Cards img1={product.gallery.first.desktop} img2={product.gallery.second.desktop} img3={product.gallery.third.desktop} img3b={product.gallery.third.mobile} />
        <Recommendations items={product.others} />
        <Categories /> 
        <BringingBanner />
        <Footer />
    </div>
  )
}

// img={product.image.desktop} title={product.name} text={product.description} price={product.price}

export default productPage

export async function getServerSideProps({ query, req }) {
    const data = await fetch('https://jsonkeeper.com/b/S9OG').then(res => res.json())

    const product = data.find((product) => product.slug === query.slug)

    return {
        props: {
          title: `Audiophile | ${product.name}`,
          product,
        },
    }
}