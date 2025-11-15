import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
    
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-yellow-500">Foodie</span> -
          your go-to destination for discovering delicious recipes, trending dishes,
          and the best culinary experiences. We believe food is more than just
          taste - it's a story, a memory, and an art worth sharing.
        </p>

    
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.paZokRr6HFdXZQoIAKmDjgHaEK?pid=Api&P=0&h=180"
            alt="Food"
            className="rounded-2xl w-[350px] h-[250px] shadow-lg"
          />
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
              What We Do
            </h2>
            <p className="text-gray-600 ">
              Our platform brings together a curated collection of recipes,
              cooking tips, and restaurant-worthy dishes you can try at home.
              Whether you're a beginner or a seasoned chef, we offer something
              flavorful for everyone.
            </p>
          </div>
        </div>

    
        <div className="mt-16 grid md:grid-cols-2 space-x-3 md:space-x-48 items-center">
          <div className="text-left  md:order-1 order-2 md:mt-0 mt-7 ">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is simple - make cooking joyful, accessible, and fun!
              With our easy-to-follow recipes, vibrant visuals, and community-driven
              content, we aim to inspire people to explore the world of food.
            </p>
          </div>https://st.focusedcollection.com/18590116/i/1800/focused_224833498-stock-photo-head-chef-teaching-his-team.jpg
          <img
            src="https://st.focusedcollection.com/18590116/i/1800/focused_224833498-stock-photo-head-chef-teaching-his-team.jpg "
            alt="Cooking"
            className=" w-[350px] h-[250px] rounded-2xl shadow-lg md:order-2 order-1"
          />
        </div>
        <p className="mt-20 text-gray-700 text-lg italic">
         “Good food is the foundation of genuine happiness.”
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
