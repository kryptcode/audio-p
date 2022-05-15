import { useRouter } from "next/router"

const Recommendations = ({ items }) => {
  const route = useRouter()
  return (
    <div className="w-[95%] md:w-[85%] mx-auto py-16">
        <h2 className="text-center uppercase font-bold text-4xl mb-8 py-4">
            you may also like
        </h2>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-8 md:space-y-0">
            {
              items.map(item => (
                <div className='flex flex-col items-center space-y-7 py-2'>
                  <div>
                    <img src={item.image.desktop} alt="" />
                  </div>
                  <h4 className="font-semibold uppercase text-2xl tracking-wide">
                    {item.name}
                  </h4>
                  <button
                    className='bg-[#d87d4a] py-2 px-5 text-white font-semibold uppercase text-sm hover:opacity-80 transition duration-200 ease-linear'
                    onClick={() => route.push(`/products/${item.slug}`)}
                  >
                      see product
                  </button>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Recommendations