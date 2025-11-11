import React from "react";
import biriyani from "../assets/biriyani.png";
import burger from "../assets/burger.png";
import idli from "../assets/idli.png";
import rice from "../assets/cooked-rice.png";
import salad from "../assets/egg-veggies-salad.png";
import fastfood from "../assets/fast-foods-png-image.png";
import roti from "../assets/indian-roti-thali.png";
import pizza from "../assets/italian-pizza.png";
import momo from "../assets/momo.png";
import noodles from "../assets/noddles.png";
import panner from "../assets/panner.png";
import vegnoodles from "../assets/schezwan-noodles.png";
import friedchicken from "../assets/southern-fried-chicken.png";
import chat from "../assets/chat.png";
import cake from "../assets/cake.png";
import { Slideup } from "../Components/Hero/Hero";
import { motion } from "framer-motion";
import { useCart } from "../Context/CartContext";

const MenuItems = [
  { id: 1, 
    name: "Chicken Biriyani", 
    image: biriyani, 
    price: "220" 
  },
  { id: 2, 
    name: "Classic Burger", 
    image: burger, 
    price: "150" 
  },
  { id: 3, 
    image: idli, 
    name: "Idli and Samber", 
    price: "180" 
  },
  { id: 4, 
    name: "plain Rice", 
    image: rice, 
    price: "50" 
  },
  { id: 5, 
    name: "Healthy Veg Salad", 
    image: salad, 
    price: "120" 
  },
  { id: 6, 
    name: "Fast Food Combo", 
    image: fastfood, 
    price: "250" 
  },
  { id: 7, 
    name: "Indian Roti Thali", 
    image: roti, 
    price: "200" 
  },
  { id: 8, 
    name: "Italian Pizza", 
    image: pizza, 
    price: "270" 
  },
  { id: 9, 
    name: "Momo Delight", 
    image: momo, 
    price: "140" 
  },
  { id: 10, 
    name: "Veg Noodles", 
    image: noodles, 
    price: "150" 
  },
  { id: 11, 
    name: "Paneer Curry", 
    image: panner, 
    price: "190" 
  },
  { id: 12, 
    name: "Schezwan Noodles", 
    image: vegnoodles, 
    price: "160" 
  },
  { id: 13, 
    name: "Fried Chicken Bucket", 
    image: friedchicken, 
    price: "₹280" 
  },
  { id: 14, 
    name: "Pampdi Chat", 
    image: chat, 
    price: "80" 
  },
  { id: 15, 
    name: "Delicious Birthday Cake", 
    image: cake, 
    price: "₹480" 
  },
];

function Menu() {
  const { addToCart } = useCart();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className=" justify-center text-center space-y-5 mb-7">
          <motion.h2
            variants={Slideup(1)}
            initial="hidden"
            whileInView="show"
            className="text-5xl font-league text-gray-800"
          >
            Our Delicious Menu
          </motion.h2>
          <motion.p
            variants={Slideup(1.3)}
            initial="hidden"
            whileInView="show"
            className="text-yellow-600 text-xl"
          >
            Explore a variety of mouth-watering dishes made with love and care,
            perfect for every craving!
          </motion.p>
        </div>

        <motion.div
          variants={Slideup(2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {MenuItems.map((item) => (
            <div
              key={item.id}
              className=" bg-white hover:bg-gradient-to-b from-yellow-50 to-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center p-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-contain mb-4 hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-yellow-600 font-medium text-lg mb-4">
                  ₹{item.price}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="px-5 py-2 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Menu;
