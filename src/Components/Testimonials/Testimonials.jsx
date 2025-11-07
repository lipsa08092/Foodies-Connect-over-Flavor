import React from "react";
import banner from "../../assets/Food-banner-foodies.png";
import { motion } from "framer-motion";
import { Slideup } from "../Hero/Hero";
import Aman from "../../assets/Aman-gupta.jpeg";

function Testimonials() {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="space-y-5 lg:max-w[400px]">
            <motion.p
              variants={Slideup(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-serif relative z-10"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              cupiditate quis dolore quas eius? Sed officia ullam vitae velit
              corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa cupiditate quis dolore quas eius? Sed officia ullam vitae
              velit corrupti.
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.img
                variants={Slideup(0.8)}
                initial="hidden"
                whileInView="show"
                src={Aman}
                alt="aman gupta"
                className="w-20 h-20 rounded-full object-cover"
              />
              <motion.div
                variants={Slideup(1.2)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className="text-xl font-bold ">Aman Gupta</h2>
                <p className="text-sm">Designation</p>
              </motion.div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
