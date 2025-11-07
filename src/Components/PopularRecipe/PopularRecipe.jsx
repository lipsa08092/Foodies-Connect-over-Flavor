import React from "react";
import plate1 from "../../assets/food-plate-foodies.png";
import plate2 from "../../assets/food2-plate-foodies.png";
import plate3 from "../../assets/food-plate3-foodies.png";
import { motion } from "framer-motion";
import { Slideup } from "../Hero/Hero";

const PopularRecipeData = [
  {
    id: 1,
    name: "Hot Dessert",
    image: plate1,
    price: "$5.00",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Spicy Salad",
    image: plate2,
    price: "$5.50",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Hot plater",
    image: plate3,
    price: "$7.00",
    delay: 1.2,
  },
];

function PopularRecipe() {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
          variants={Slideup(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold py-8"
        >
          OUR POPULAR RECIPE
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {PopularRecipeData.map((item) => {
            return (
              <div className=" group text-center space-y-3 bg-white/50  shadow-xl rounded-xl p-3 ">
                <img
                  src={item.image}
                  alt=""
                  className="w-44 h-auto img-shadow group-hover:scale-x-110 group-hover:translate-x-5 group-hover:translate-y-[-20%] transition-all duration-300"
                />
                <div>
                  <button className="opacity-0 bg-darkGreen text-white hover:scale-110 font-semibold px-4 py-2 rounded-full duration-200 gap-4 items-center inline-block !mt-10 group-hover:mb-3 group-hover:opacity-100">
                    Buy Now
                  </button>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-semibold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularRecipe;
