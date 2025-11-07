import React from "react";
import banner from "../../assets/Food-banner-foodies.png";
import { motion } from "framer-motion";
import { Slideup } from "../Hero/Hero";

function Banner() {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={banner}
              alt=""
              className="relative z-10 w-full lg:max-w-[380px] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] lg:h-[420px] lg:w-[420px] bg-lightYellow rounded-full"
            ></motion.div>
          </div>
          <div className="space-y-5 lg:max-w[400px]">
            <motion.h1
              variants={Slideup(1)}
              initial="hidden"
              whileInView="show"
              className="text-6xl uppercase font-semibold font-league"
            >
              The Best Yummy food in the town
            </motion.h1>
            <motion.p variants={Slideup(1.3)} initial="hidden" whileInView="show">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              cupiditate quis dolore quas eius? Sed officia ullam vitae velit
              corrupti.
            </motion.p>
            <motion.button
              variants={Slideup(1.6)}
              initial="hidden"
              whileInView="show"
              className="bg-darkGreen text-white hover:scale-110 font-semibold px-4 py-2 rounded-full duration-200 gap-4 items-center inline-block !mt-10"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
