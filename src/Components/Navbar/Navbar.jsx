import React, { useState } from "react";
import logo from "../../assets/logo-Foodies.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Products",
    path: "/products",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Menu",
    path: "/menu",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Delivery",
    path: "/delivery",
    delay: 0.5,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contactus",
    delay: 0.6,
  },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

//  For sidebar
export const SlideLeft = (delay = 0) => {
  return {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

function Navbar() {
  const [menuopen, setMenuopen] = useState(false);
  const { totalItems } = useCart();

  const handleMenuToggle = () => {
    setMenuopen(!menuopen);
  };

  return (
    <nav className="relative shadow-lg ">
      <div className="container flex justify-between items-center font-league py-4">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={logo}
          alt="logo"
          className="w-36"
        />
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => {
              return (
                <motion.li
                  key={menu.id}
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  className="nav-menu"
                >
                  <Link to={menu.path} className="flex px-2 py-2 text-2xl">
                    {menu.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <motion.div
            variants={SlideDown(1)}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <Link to="/cart">
              <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark relative">
                <IoCartOutline size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-3 -right-2 bg-yellow-500 text-black text-md px-2 font-mono rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={SlideDown(1)}
            initial="initial"
            animate="animate"
            className="block lg:hidden"
          >
            <button
              onClick={handleMenuToggle}
              className="h-[40px] w-[40px] place-items-center rounded-full text-gray-300 bg-dark mt-2"
            >
              <GiHamburgerMenu size={22} />
            </button>
          </motion.div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuopen ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex gap-36">
          <img src={logo} alt="" className="w-32" />
          <button className="text-2xl " onClick={handleMenuToggle}>
            <IoClose size={30} />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-6 text-lg font-semibold">
          {NavMenu.map((menu, index) => (
            <motion.li
              key={menu.id}
              variants={SlideLeft(index * 0.1)}
              initial="hidden"
              animate={menuopen ? "show" : "hidden"}
            >
              <Link
                to={menu.path}
                className="hover:text-yellow-700 hover:underline transition"
                onClick={() => setMenuopen(false)}
              >
                {menu.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      {menuopen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={handleMenuToggle}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
