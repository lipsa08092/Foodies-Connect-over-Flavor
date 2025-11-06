import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HotDesert from './Components/HotDesert/HotDesert';

function App() {
  return (
    <div className='overflow-x-hidden bg-white2'>
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      </div>
      <div>
        <HotDesert/>
      </div>
    </div>
  )
}

export default App
