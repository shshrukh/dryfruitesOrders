import React from 'react'
import Hero from "../Components/Hero";
import ProductList from "../Components/Products";
import DealsSection from "../Components/DealsSection";
import Testmonial from '../Components/Testmonial';
import VideoSection from '../Components/VideoSection';
import productData from '../Components/Ui/utils/cardsProducts.json'
import BestProducts from '../Components/Ui/BestProducts';
import Customerdetails from './customerdetails';


const Home = () => {
  const productsDetails = productData || [];
  return (
    <div>
      <Hero />
      {/* <Customerdetails /> */}
      <ProductList />
      <DealsSection />
      <h1 className='text-xl pl-15 py-7 font-medium'>Best Products</h1>
      <div className="flex gap-6 max-w-full overflow-x-auto overflow-y-hidden pl-[66px] no-scrollbar">
        {productData?.map((items) => (
          <BestProducts
            key={items?.id}
            heading={items?.title}
            subheading={items?.description}
            imageSrc={items?.sideImage}
            left={items?.left}
            top={items?.top}
            width={items?.width}
          />
        ))}
      </div>

      <Testmonial />
      <VideoSection />

    </div>
  )

}

export default Home
