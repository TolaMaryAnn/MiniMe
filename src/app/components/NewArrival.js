// src/app/components/NewArrivals.js

'use client';

import Image from 'next/image';
import N1 from "../Assets/Images/N1.jpg";
import N2 from "../Assets/Images/N2.jpg";
import N3 from "../Assets/Images/N3.jpg";
import image from 'next/image';

const NewArrivals = () => {
  const items = [
    { id: 1, name: "Product One", price: "$49.99", image: N1 },
    { id: 2, name: "Product Two", price: "$39.99", image: N2 },
    { id: 3, name: "Product Three", price: "$29.99", image: N3 },
  ];

  return (
     <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-5xl font-normal text-black">Fresh Arrivals and Collections</h2>
          <button className="border-pink-600 border text-pink-600 px-4 py-3 rounded-full md:text-lg text-sm   hover:bg-pink-700 hover:text-white transition-colors duration-200">
            See More
          </button>
        </div>

        {/* Photo Mix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Image */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image
                src={items[0].image}
                alt={items[0].name}
                width={600}
                height={400}
                className="w-full h-172 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  {items[0].name}
                </h3>
                <p className="text-pink-600 text-2xl md:text-5xl  font-extrabold">{items[0].price}</p>
              </div>
            </div>
          </div>

          {/* Smaller Images */}
          <div className="grid grid-rows-2 gap-6">
            {items.slice(1).map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-pink-600 text-2xl md:text-5xl font-extrabold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
