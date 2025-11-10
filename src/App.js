import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HotDesert from "./Components/HotDesert/HotDesert";
import Banner from "./Components/Banner/Banner";
import PopularRecipe from "./Components/PopularRecipe/PopularRecipe";
import Testimonials from "./Components/Testimonials/Testimonials";
import FooterBanner from "./Components/FooterBanner/FooterBanner";
import Footer from "./Components/Footer/Footer";
import Menu from "./Screens/Menu";
import Cart from "./Screens/MyCart"

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-white text-dark">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative overflow-hidden">
                  <Hero />
                </div>
                <HotDesert />
                <Banner />
                <PopularRecipe />
                <Testimonials />
                <FooterBanner />
              </>
            }
          />
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<Menu />} />
          <Route path="/delivery" element={<Menu />} />
          <Route path="/contactus" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
