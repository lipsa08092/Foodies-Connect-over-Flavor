import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    rating: "",
    brand: "",
    category: "",
    stock: "",
    description: "",
    warranty: "",
    shipping: "",
    returnPolicy: "",
    reviews: "",
    images: [],
  });

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
    if (category === "All") setFiltered(products);
    else setFiltered(products.filter((item) => item.category === category));
  };

  // const openProductDetails = async (productId) => {
  //   try {
  //     const foundProduct = products.find((p) => p.id === productId);
  //     if (foundProduct) {
  //       setSelectedProduct(foundProduct);
  //       localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));
  //     } else {
  //       const res = await fetch(`https://dummyjson.com/products/${productId}`);
  //       const data = await res.json();
  //       setSelectedProduct(data);
  //       localStorage.setItem("selectedProduct", JSON.stringify(data));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching product:", error);
  //   }
  // };

  // const closeModal = () => {
  //   setSelectedProduct(null);
  //   localStorage.removeItem("selectedProduct");
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files);
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageURLs],
    }));
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });
  };

  const openForm = (product) => {
    if (product) {
      setEditProduct(product);
      setFormData({
        title: product.title,
        price: product.price,
        rating: product.rating,
        brand: product.brand,
        category: product.category,
        stock: product.stock,
        description: product.description,
        warranty: product.warrantyInformation || "",
        shipping: product.shippingInformation || "",
        returnPolicy: product.returnPolicy || "",
        reviews: product.reviews
          ? product.reviews.map((r) => r.comment).join(",")
          : product.reviews || "",
        images: product.images,
      });
    } else {
      setEditProduct(null);
      setFormData({
        title: "",
        price: "",
        rating: "",
        brand: "",
        category: "",
        stock: "",
        description: "",
        warranty: "",
        shipping: "",
        returnPolicy: "",
        reviews: "",
        images: [],
      });
    }
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: editProduct ? editProduct.id : Date.now(),
      ...formData,
      warrantyInformation: formData.warranty,
      shippingInformation: formData.shipping,
      returnPolicy: formData.returnPolicy,
      reviews: formData.reviews
        ? formData.reviews.split(",").map((r) => ({
            comment: r.trim(),
            rating: 5,
            reviewerName: "User",
          }))
        : [],
      thumbnail: formData.images[0] || "",
    };

    let updatedProducts;
    if (editProduct) {
      updatedProducts = products.map((p) =>
        p.id === editProduct.id ? newProduct : p
      );
    } else {
      updatedProducts = [...products, newProduct];
    }
    setProducts(updatedProducts);
    setFiltered(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setShowForm(false);
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);

    setProducts(updated);
    setFiltered(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl mb-2 text-yellow-500 text-center sm:text-left">
            Our Products
          </h2>
          <p className="text-center sm:text-left text-2xl font-serif font-semibold mb-7">
            Explore By Categories
          </p>
        </div>
        <button
          onClick={() => openForm()}
          className="px-5 py-2  bg-yellow-400 hover:bg-yellow-600 text-white font-semibold rounded-lg  "
        >
          + Add Product
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-5 py-2 text-lg font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-yellow-500 hover:bg-yellow-600 text-white rounded-full"
                : "bg-white text-gray-600 border hover:bg-gray-200 rounded-full"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 relative cursor-pointer"
          >
            <Link to={`/products/${product.id}`}>
              <div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-60 object-contain mb-4 hover:scale-110 transition-transform duration-300"
                />
              </div>

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
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>

            <button
              onClick={(e) => {
                e.preventDefault();
                openForm(product);
              }}
              className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 text-white hover:bg-blue-600"
            >
              <MdEdit />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteProduct(product.id);
              }}
              className="absolute top-10 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-1"
            >
              <RiDeleteBinLine />
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center mt-10 text-gray-500 text-lg">
          No products found in this category.
        </p>
      )}

      {/* {selectedProduct && (
        <div>
          <div className="fixed inset-0 bg-black/60 z-40"></div>
          <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] sm:w-[600px] max-h-[90%] overflow-y-auto p-6 rounded-2xl">
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
                <span className="flex gap-1">
                  <FaStar size={16} className="mt-1" />
                  {selectedProduct.rating}
                </span>
              </p>
              <p>
                <strong>Stock:</strong> {selectedProduct.stock}
              </p>
              <p>
                <strong>Warranty:</strong>
                {selectedProduct.warrantyInformation || "No info"}
              </p>
              <p>
                <strong>Shipping:</strong>
                {selectedProduct.shippingInformation || "Standard shipping"}
              </p>
              <p>
                <strong>Return Policy:</strong>
                {selectedProduct.returnPolicy || "Not available"}
              </p>
            </div>

            {Array.isArray(selectedProduct.reviews) && selectedProduct.reviews.length > 0 && (
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
                        <span>{rev.reviewerName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )} */}

      {/*Add/Edit*/}
      {showForm && (
        <div className="fixed inset-0 bg-white overflow-y-auto p-6">
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-4 right-6 text-gray-600 hover:text-black text-3xl"
          >
            <RiCloseLine />
          </button>
          <h2 className="text-3xl font-bold mb-6 text-yellow-500 text-center">
            {editProduct ? "Edit Product" : "Add Product"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div>
              <label className="block font-semibold font-serif mb-1">
                Title:
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Price ($):
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Rating:
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Category:
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Select a Category</option>
                <option value="beauty">Beauty</option>
                <option value="foods">Foods</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
                <option value="home-decoration">Home Decoration</option>
                <option value="kitchen-accessories">Kitchen Accessories</option>
                <option value="laptops">Laptops</option>
                <option value="mens-shirts">Men's Shirts</option>
                <option value="mens-shoes">Men's Shoes</option>
                <option value="mens-watches">Men's Watches</option>
                <option value="mobile-accessories">Mobile Accessories</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="skin-care">Skin Care</option>
                <option value="smartphones">Smartphones</option>
                <option value="sports-accessories">Sports Accessories</option>
                <option value="sunglasses">Sunglasses</option>
                <option value="tablets">Tablets</option>
                <option value="tops">Tops</option>
                <option value="vehicle">Vehicle</option>
                <option value="womens-bags">Women's Bags</option>
                <option value="womens-dresses">Women's Dresses</option>
                <option value="womens-jewellery">Women's Jewellery</option>
                <option value="womens-shoes">Women's Shoes</option>
                <option value="womens-watches">Women's Watches</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Stock:
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Description:
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 min-h-[80px]"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Warranty:
              </label>
              <input
                type="text"
                name="warranty"
                value={formData.warranty}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Shipping:
              </label>
              <input
                type="text"
                name="shipping"
                value={formData.shipping}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Return Policy:
              </label>
              <input
                type="text"
                name="returnPolicy"
                value={formData.returnPolicy}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold font-serif mb-1">
                Upload Product Images:
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleMultipleImages}
                className="w-full border rounded-lg p-2"
              />

              {formData.images.length > 0 && (
                <div className="mt-4">
                  <label className="block font-semibold font-serif mb-2 text-lg">
                    Image Preview:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {formData.images.map((img, index) => (
                      <div key={index} className="relative">
                        <img
                          src={img}
                          alt={`preview-${index}`}
                          className="w-full h-32 object-contain rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-black/60 text-white text-sm rounded-full px-1"
                        >
                          <IoMdClose />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg mt-4"
            >
              {editProduct ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Products;
