import React from 'react'
import Hero from "../Components/Hero";
import ProductList from "../Components/Products";
import DealsSection from "../Components/DealsSection";



const Home = () => {
  const data = dummyJsons;
  return (
    <div>
     <Hero />
     <ProductList />
        <DealsSection />
    </div>
  )

}

export default Home
