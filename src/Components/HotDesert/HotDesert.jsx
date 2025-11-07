import React from "react";
import plate1 from "../../assets/food-plate-foodies.png";
import plate2 from "../../assets/food2-plate-foodies.png";
import plate3 from "../../assets/food-plate3-foodies.png";
import { motion } from "framer-motion";
import { Slideup } from "../Hero/Hero";

const HotDesertData = [
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

function HotDesert() {
  return (
    <section>
      <div className="container py-12">
        <motion.h3
          variants={Slideup(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-bold text-darkGreen py-8"
        >
          HOT DESSERT
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDesertData.map((item) => {
            return (
              <motion.div
                variants={Slideup(item.delay)}
                initial="hidden"
                whileInView="show"
                className="group bg-white/50 shadow-md p-3 flex item-center gap-3"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div className="mt-7">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HotDesert;
