import React from 'react'
import Hero from "../Components/Hero";
import dummyJsons from '../Components/UI/utils/cardsProducts.json'
import BestProducts from '../Components/UI/BestProducts';



const Home = () => {
  const data = dummyJsons;
  return (
    <div>
     <Hero />
     
    </div>
  )

}

export default Home
