import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center">
          <Link href="/">
            <div className="text-4xl font-extrabold text-white cursor-pointer">
              MiniMe
            </div>
          </Link>
        </div>
            <p className="text-white text-sm">© 2024 MaryAnn</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-black">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-black">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-black">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-black">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-pink-50">Home</a></li>
              <li><a href="#" className="text-white hover:text-pink-50">Product</a></li>
              <li><a href="#" className="text-white hover:text-pink-50">Blog</a></li>
              <li><a href="#" className="text-white hover:text-pink-50">About</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-white mb-4 text-center sm:text-left">Sign up to receive updates and promotions.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-4 text-gray-700 rounded-lg w-full sm:w-64"
            />
            <button className="bg-pink-50  px-6 py-2 rounded-lg text-black  hover:bg-pink-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
