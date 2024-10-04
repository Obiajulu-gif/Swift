"use client"; // This ensures this component is treated as a client component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart"; // Import the Cart component

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);

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

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<nav className="bg-black text-white p-4">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link href="/" className="flex items-center cursor-pointer">
					<Image
						src="/images/logo.png"
						alt="Swift Logo"
						width={40}
						height={40}
					/>
					<span className="ml-3 text-xl font-semibold">Swift</span>
				</Link>

				<div className="lg:hidden">
					<button onClick={toggleMenu} className="text-white">
						{isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
					</button>
				</div>

				<div className="hidden lg:flex items-center space-x-6 ml-auto">
					<Link href="/development" className="hover:text-blue-500">
						Development Tools
					</Link>
					<Link href="/productdetail" className="hover:text-blue-500">
						Product
					</Link>
					<Link href="#footer" className="hover:text-blue-500">
						Contact Us
					</Link>
					<Link href="#faq" className="hover:text-blue-500">
						Help
					</Link>
					<div onClick={toggleCart} className="relative cursor-pointer">
						<FiShoppingCart size={20} />
						{cartCount > 0 && (
							<span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold bg-red-600 text-white rounded-full">
								{cartCount}
							</span>
						)}
					</div>
					<button className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
						<FiUser className="inline mr-2" />
						Become a Merchant
					</button>
				</div>
			</div>

			{isCartOpen && <Cart onClose={toggleCart} />}
		</nav>
	);
};

export default Navbar;
