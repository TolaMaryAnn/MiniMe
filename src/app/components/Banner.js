import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import bannerImage from "../Assets/Images/herobg2.jpg"; 


const Banner = () => {
  return (
  <div className="px-12 py-4">
      <section className="relative bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 py-12 rounded-2xl shadow-xl overflow-hidden">
      {/* Background Decorative Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={bannerImage}
          alt="Decorative Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Text */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Get 10% Off Your <br />
            First Purchase!
          </h2>
          <p className="text-white text-xl mt-4">
            Experience the joy of shopping with an exclusive discount. Shop now!
          </p>
        </div>

        {/* Right Section: Button & Decorative Image */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex flex-col items-center">
       

          {/* Button */}
          <button className="flex items-center bg-white text-pink-600 font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-pink-100 transition duration-300">
            Shop Now
            <FaShoppingCart className="ml-3 text-xl" />
          </button>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Banner;
