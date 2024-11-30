'use client'; // This line makes this component a client-side component

import { useState } from 'react'; // Import useState for handling the mobile menu toggle
import Link from "next/link";
import dynamic from 'next/dynamic';

// Dynamically importing React Icons
const FiSearch = dynamic(() => import('react-icons/fi').then((mod) => mod.FiSearch));
const FiShoppingCart = dynamic(() => import('react-icons/fi').then((mod) => mod.FiShoppingCart));
const FiUser = dynamic(() => import('react-icons/fi').then((mod) => mod.FiUser));
const FiMenu = dynamic(() => import('react-icons/fi').then((mod) => mod.FiMenu));
const FiX = dynamic(() => import('react-icons/fi').then((mod) => mod.FiX));

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="text-5xl font-extrabold text-pink-600 cursor-pointer">
              MiniMe
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/">
              <div className="text-pink-600 hover:text-pink-600 cursor-pointer transition-colors duration-200">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <div className="text-gray-600 hover:text-pink-600 cursor-pointer transition-colors duration-200">
                Products
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <div className="text-gray-600 hover:text-pink-600 cursor-pointer transition-colors duration-200">
                Blog
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="text-gray-600 hover:text-pink-600 cursor-pointer transition-colors duration-200">
                About
              </div>
            </Link>
          </li>
        </ul>

        {/* Right: Icons for Desktop */}
        <div className="hidden md:flex space-x-6 items-center text-2xl">
          <button aria-label="Search" className="text-gray-600 hover:text-pink-600 transition duration-200">
            <FiSearch />
          </button>
          <button aria-label="Cart" className="text-gray-600 hover:text-pink-600 transition duration-200">
            <FiShoppingCart />
          </button>
          <button aria-label="Account" className="text-gray-600 hover:text-pink-600 transition duration-200">
            <FiUser />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Menu"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4 p-6 shadow-lg">
          <button
            aria-label="Close Menu"
            className="absolute top-6 right-6 text-2xl text-gray-600 hover:text-pink-600"
            onClick={toggleMobileMenu}
          >
            <FiX />
          </button>
          <ul className="space-y-4 text-lg font-medium text-center">
            <li>
              <Link href="/" onClick={toggleMobileMenu} className='text-pink-600'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
          </ul>

          {/* Icons in Mobile Menu */}
          <div className="flex space-x-6 items-center text-2xl">
            <button aria-label="Search" className="text-gray-600 hover:text-pink-600 transition duration-200">
              <FiSearch />
            </button>
            <button aria-label="Cart" className="text-gray-600 hover:text-pink-600 transition duration-200">
              <FiShoppingCart />
            </button>
            <button aria-label="Account" className="text-gray-600 hover:text-pink-600 transition duration-200">
              <FiUser />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
