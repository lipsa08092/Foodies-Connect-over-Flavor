import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsEmojiHeartEyes } from "react-icons/bs";

function MyCart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart , totalPrice} = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
 
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">Thank you for ordering with Foodies</p>
        <Link
          to="/menu"
          className="bg-black text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          Back To Our Menu
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24">
        <FaShoppingCart className="text-gray-400 text-7xl mb-6" />
        <p className="text-gray-600 text-2xl font-medium mb-5">
            Your wishlist is empty — start adding your favorites!
          </p>
        <Link
          to="/menu"
          className="bg-yellow-600 text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          Return to Our Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 mb-20">
      <div className="flex text-center gap-2 mb-10 ">
      <h2 className="text-5xl font-league mb-6 text-center text-gray-700">Your Cart</h2>
      <p className="text-4xl mt-2 text-yellow-500 animate-bounce"> <BsEmojiHeartEyes /></p>
      </div>

      <div className="space-y-6">   
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-yellow-600">{item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className=" text-red-600 "
              >
                <RiDeleteBinFill  size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <h3 className="text-2xl font-semibold mb-3">Total: ₹{totalPrice}</h3>
        <div className="flex justify-end gap-4">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-gray-400"
          >
            Clear Cart
          </button>
          <button
            onClick={handlePlaceOrder}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
