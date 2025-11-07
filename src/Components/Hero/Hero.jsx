import React from "react";
import banana from "../../assets/banana-foodies.png";
import leaf from "../../assets/leaf-foodies.png";
import spoon from "../../assets/spoon-foodies.png";
import Food from "../../assets/food-Foodies.png";
import { IoCarOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const Slideup = (delay) => {
  return {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

function Hero() {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0 ">
            <motion.h1
              variants={Slideup(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold  text-outline text-transparent "
            >
              YUMMY
              <img
                src={leaf}
                alt=""
                className="absolute w-[50px] top-0 right-0 md:right-[100px]"
              />
            </motion.h1>
            <motion.h1
              variants={Slideup(1)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold "
            >
              BREAKFAST
            </motion.h1>
            <motion.p
              variants={Slideup(1.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              dolorem est dolore atque ad mollitia dolores aut voluptatum unde
              quisquam!
            </motion.p>
            <motion.button
              variants={Slideup(2)}
              initial="hidden"
              whileInView="show"
              className="bg-darkGreen text-white hover:scale-110 font-semibold px-4 py-2 rounded-full duration-200 gap-4 items-center inline-block !mt-10"
            >
              <IoCarOutline className="inline mr-2 " />
              Order Now
            </motion.button>
          </div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Food}
              alt=""
              className="w-[400px] img-shadow "
            />

            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={spoon}
              alt=""
              className="w-[350px] img-shadow absolute bottom-[-120px] -left-16 rotate-[75deg] "
            />

            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={banana}
              alt=""
              className="w-[350px] img-shadow absolute  top-[-30px] right-[-130px] md:right-[-160px]"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[60%] z-0"
      ></motion.div>
    </main>
  );
}

export default Hero;
