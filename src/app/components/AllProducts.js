// src/app/components/AllProducts.js

'use client';

import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import one from "../Assets/Images/one.jpg";
import two from "../Assets/Images/two.jpg";
import three from "../Assets/Images/three.jpg";
import four from "../Assets/Images/four.jpg";
import five from "../Assets/Images/five.jpg";
import six from "../Assets/Images/six.jpg";
import seven from "../Assets/Images/seven.jpg";
import eight from "../Assets/Images/eight.jpg";

const AllProducts = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$19.99", image: one, rating: 4.5 },
    { id: 2, name: "Product 2", price: "$29.99", image: two, rating: 3.5 },
    { id: 3, name: "Product 3", price: "$39.99", image: three, rating: 5 },
    { id: 4, name: "Product 4", price: "$49.99", image: four, rating: 4 },
    { id: 5, name: "Product 5", price: "$59.99", image: five, rating: 4.5 },
    { id: 6, name: "Product 6", price: "$69.99", image: six, rating: 3 },
    { id: 7, name: "Product 7", price: "$79.99", image: seven, rating: 5 },
    { id: 8, name: "Product 8", price: "$89.99", image: eight, rating: 4.5 },
    { id: 9, name: "Product 1", price: "$19.99", image: one, rating: 4.5 },
    { id: 10, name: "Product 2", price: "$29.99", image: two, rating: 3.5 },
    { id: 11, name: "Product 3", price: "$39.99", image: three, rating: 5 },
    { id: 12, name: "Product 4", price: "$49.99", image: four, rating: 4 },
    { id: 13, name: "Product 5", price: "$59.99", image: five, rating: 4.5 },
    { id: 14, name: "Product 6", price: "$69.99", image: six, rating: 3 },
    { id: 15, name: "Product 7", price: "$79.99", image: seven, rating: 5 },
    { id: 16, name: "Product 8", price: "$89.99", image: eight, rating: 4.5 },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center text-yellow-500">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} />
          ))}
        {halfStar && <FaStar className="half-star opacity-50" />}
      </div>
    );
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-5xl font-normal text-black">All Products</h2>
          <button className="flex items-center border-pink-600 border text-pink-600 px-6 py-3 rounded-full text-sm md:text-xl   hover:bg-pink-700 hover:text-white transition-colors duration-200">
            See More
            <FaShoppingCart className="ml-2" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-pink-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover px-4 mt-4  rounded-xl"
              />

              {/* Product Info */}
              <div className="p-4">
               
                <p className="text-black text-xl md:text-3xl font-extrabold">{product.price}</p>
                <h3 className="text-md font-semibold text-pink-600">
                  {product.name}
                </h3>

                {/* Rating and Cart */}
                <div className="flex items-center justify-between mt-2">
                  {/* Rating */}
                  {renderStars(product.rating)}

                  {/* Add to Cart Icon */}
                  <button
                    aria-label="Add to Cart"
                    className="text-black hover:text-pink-600 transition-colors duration-200"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;import image from 'next/image';
