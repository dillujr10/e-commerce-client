import Image from 'next/image'
import Product from '@/Components/Product'
import Slider from '@/Components/Slider'
import Trend from '@/Components/Trend'
export default function Home() {
  return (
    <>

    <Slider/>
    <Trend/>
       
        <div className="main w-full flex items-center justify-center">
        <div className="container  sm: grid grid-cols-1   gap-10 m-16 justify-center md:grid-cols-2 lg:grid-cols-3 ml-10 xl:grid-cols-4  ">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>

        </div>
     
      
   
    </>
  )
}
