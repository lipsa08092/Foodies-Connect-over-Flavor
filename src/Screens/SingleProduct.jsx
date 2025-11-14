import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    const found = saved.find((p) => p.id === Number(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl text-gray-600">
        Product not found...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 ">
      <div className="">
      <Link to="/products" className=" text-black u text-lg mb-6 inline-block">
        <IoMdClose />
      </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-96 object-contain shadow-lg rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-xl text-yellow-600 font-semibold mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            {product.description}
          </p>

          <p>
            <strong className="text-gray-600">Brand:</strong> {product.brand}
          </p>
          <p>
            <strong className="text-gray-600">Category:</strong> {product.category}
          </p>
          <p>
            <strong className="text-gray-600">Stock:</strong> {product.stock}
          </p>
          <p className="flex gap-2 text-yellow-600 font-semibold">
            <strong className="text-gray-600">Rating:</strong>
            <FaStar size={18} className="text-yellow-500" /> {product.rating}
          </p>

          <p>
            <strong className="text-gray-600">Warranty:</strong>
            {product.warrantyInformation || "No info"}
          </p>
          <p>
            <strong className="text-gray-600">Shipping:</strong>
            {product.shippingInformation || "Standard shipping"}
          </p>
          <p>
            <strong className="text-gray-600">Return Policy:</strong>
            {product.returnPolicy || "Not available"}
          </p>

          {Array.isArray(product.reviews) && product.reviews.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Customer Reviews:</h2>
              {product.reviews.map((rev, i) => (
                <div key={i} className="border rounded-lg p-4 mb-3 bg-gray-50">
                  <p className="italic">"{rev.comment}"</p>
                  <p className="text-yellow-600 font-semibold flex gap-2">
                    <FaStar size={18} />
                    {rev.rating}
                  </p>
                  <p className="text-sm text-gray-500">{rev.reviewerName}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
