import React from 'react'
import Hero from "../Components/Hero";
import ProductList from "../Components/Products";
import DealsSection from "../Components/DealsSection";
import Testmonial from '../Components/Testmonial';
import VideoSection from '../Components/VideoSection';



const Home = () => {
  
  return (
    <div>
     <Hero />
     <ProductList />
        <DealsSection />
        <Testmonial />
    <VideoSection />
    </div>
  )

}

export default Home
