"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load the cart count from localStorage
    const loadCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    // Load cart count on page load
    loadCartCount();

    // Listen for localStorage changes
    window.addEventListener("storage", loadCartCount);

    return () => {
      window.removeEventListener("storage", loadCartCount);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = {
    logo: {
      src: "/images/logo.png",
      alt: "SwiftTeam Logo",
      text: "Swift",
    },
    links: [
      { href: "/development", text: "Development Tools" },
      { href: "/productdetail", text: "Product" },
      { href: "#footer", text: "Contact Us" },
      { href: "#faq", text: "Help" },
      {
        href: "#cart",
        text: (
          <div className="relative">
            <FiShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        ),
      },
    ],
    button: {
      text: (
        <>
          <FiUser className="inline mr-2" />
          Become a merchant
        </>
      ),
    },
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src={navItems.logo.src} alt={navItems.logo.alt} width={40} height={40} className="animate-pulse" />
          <span className="ml-3 text-xl font-semibold">{navItems.logo.text}</span>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          {navItems.links.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-blue-500">
              {link.text}
            </Link>
          ))}
          <button className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg animation-bounce shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none">
            {navItems.button.text}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-start space-y-4 mt-4">
          {navItems.links.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-blue-500">
              {link.text}
            </Link>
          ))}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded animation-bounce shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none">
            {navItems.button.text}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
