// src/app/components/Hero.js

"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto text-center">
        {/* Hero Content */}
        <div className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-6">
        <h1>
            <span className="text-black">Just Like</span>{' '}
            <span className="text-pink-600">mommy and daddy</span>,{' '}
            <span className="text-black">but</span>{' '}
            <span className="text-pink-600">tiny</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            A playful take on mini versions, a versitile collection of taste.
          </p>
        </div>

        {/* Shop Now Button */}
        <Link href="/shop">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg md:text-xl flex items-center justify-center mx-auto hover:bg-pink-700 transition-colors duration-200">
            <FiShoppingCart className="mr-3" /> Shop Now
          </button>
        </Link>
      </div>

      
    </section>
  );
};

export default Hero;
