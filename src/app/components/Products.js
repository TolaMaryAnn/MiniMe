// src/app/components/Products.js

"use client";

import Image from "next/image";


import one from "../Assets/Images/one.jpg";
import two from "../Assets/Images/two.jpg";
import three from "../Assets/Images/three.jpg";
import four from "../Assets/Images/four.jpg";
import five from "../Assets/Images/five.jpg";
import six from "../Assets/Images/six.jpg";
import seven from "../Assets/Images/seven.jpg";
import eight from "../Assets/Images/eight.jpg";
import nine from "../Assets/Images/nine.jpg";

const Products = () => {
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    one,
    two,
    three,
    seven,
    eight,
    nine,
  
  ];

  return (
    <section
    
    >
      <div className="absolute "></div> {/* Overlay */}
      <div className="container relative mx-auto px-6">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>


      <div>

      </div>
    </section>
  );
};

export default Products;
import style from "styled-jsx/style";
