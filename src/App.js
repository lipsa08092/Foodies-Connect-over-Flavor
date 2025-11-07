import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HotDesert from './Components/HotDesert/HotDesert';
import Banner from "./Components/Banner/Banner";
import PopularRecipe from './Components/PopularRecipe/PopularRecipe';
import Testimonials from './Components/Testimonials/Testimonials';
import FooterBanner from './Components/FooterBanner/FooterBanner';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='overflow-x-hidden bg-white text-dark'>
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      </div>
      <div>
        <HotDesert/>
        <Banner/>
        <PopularRecipe/>
        <Testimonials/>
        <FooterBanner/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
