import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      const parsedProducts = JSON.parse(savedProducts);
      setProducts(parsedProducts);
      setFiltered(parsedProducts);
      const uniqueCategories = [
        "All",
        ...new Set(parsedProducts.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    } else {
      fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setFiltered(data.products);
          localStorage.setItem("products", JSON.stringify(data.products));
          const uniqueCategories = [
            "All",
            ...new Set(data.products.map((p) => p.category)),
          ];
          setCategories(uniqueCategories);
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, []);

  
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      setSelectedProduct(JSON.parse(savedProduct));
    }
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") 
        setFiltered(products);
    else 
        setFiltered(products.filter((item) => item.category === category));
  };

 const openProductDetails = async (productId) => {
  try {
    const foundProduct = products.find((p) => p.id === productId);

    if (foundProduct) {
      setSelectedProduct(foundProduct);
      localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));
    } else {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      setSelectedProduct(data);
      localStorage.setItem("selectedProduct", JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};


  const closeModal = () => {
    setSelectedProduct(null);
    localStorage.removeItem("selectedProduct");
  };

  return (
    <div className="container mx-auto py-16 px-6 ">
      <h2 className="text-4xl mb-2 text-yellow-500 text-center">
        Our Products
      </h2>
      <p className="text-center text-2xl font-serif font-semibold mb-7">
        Explore By Categories
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-5 py-2  text-lg font-semibold transition-all duration-300 
            ${
              selectedCategory === cat
                ? "bg-yellow-500 hover:bg-yellow-600 text-white rounded-full "
                : " bg-white text-gray-600 border hover:bg-gray-200  rounded-full"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              onClick={() => openProductDetails(product.id)}
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-60 object-contain mb-4 hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4">
              <p className="text-yellow-500 font-semibold mb-3 flex">
                <FaStar size={18} />
                {product.rating}
              </p>
              <h3 className="font-bold text-xl mb-2 font-serif">
                {product.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-semibold text-lg">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 ">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center mt-10 text-gray-500 text-lg">
          No products found in this category.
        </p>
      )}

      {selectedProduct && (
        <div>
          <div className="fixed inset-0 bg-black/60 z-40"></div>
          <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white  w-[90%] sm:w-[600px] max-h-[90%] overflow-y-auto p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl"
            >
              <RiCloseLine />
            </button>

            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-full h-64 object-contain mb-5"
            />
            <h3 className="text-2xl font-bold mb-2 font-serif">
              {selectedProduct.title}
            </h3>
            <p className="text-gray-700 mb-4 font-serif">
              {selectedProduct.description}
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Brand:</strong> {selectedProduct.brand || "N/A"}
              </p>
              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>
              <p>
                <strong>Price:</strong> ${selectedProduct.price}
              </p>
              <p className="text-yellow-500 flex gap-2">
                <strong>Rating:</strong>
                <span className="flex gap-1 ">
                  <FaStar size={16} className="mt-1" />
                  {selectedProduct.rating}
                </span>
              </p>
              <p>
                <strong>Stock:</strong> {selectedProduct.stock}
              </p>
              <p>
                <strong>Warranty: </strong>
                {selectedProduct.warrantyInformation || "No info"}
              </p>
              <p>
                <strong>Shipping: </strong>
                {selectedProduct.shippingInformation || "Standard shipping"}
              </p>
              <p>
                <strong>Return Policy: </strong>
                {selectedProduct.returnPolicy || "Not available"}
              </p>
            </div>

            {selectedProduct.reviews && selectedProduct.reviews.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">
                  Customer Reviews:
                </h4>
                <div className="space-y-3">
                  {selectedProduct.reviews.map((rev, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 rounded-lg p-3 bg-gray-50"
                    >
                      <p className="text-sm text-gray-800 italic">
                        "{rev.comment}"
                      </p>
                      <div className="flex justify-between text-sm mt-1 text-gray-600">
                        <span className="text-yellow-500 flex text-lg gap-1">
                          <FaStar size={18} className="mt-1" />
                          {rev.rating}
                        </span>
                        <span> {rev.reviewerName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
