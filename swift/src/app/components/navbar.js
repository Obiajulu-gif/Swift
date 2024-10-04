"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import { useCart } from "./CartContext"; // Import the useCart hook

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { cartCount } = useCart(); // Get the cart count from context

	// Function to toggle the menu visibility
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-black text-white p-4">
			<div className="container mx-auto px-4 flex justify-between items-center">
				{/* Logo Section - Always visible */}
				<Link href="/" className="flex items-center cursor-pointer">
					<Image
						src="/images/logo.png"
						alt="SwiftTeam Logo"
						width={40}
						height={40}
						className="animate-pulse"
					/>
					<span className="ml-3 text-xl font-semibold">Swift</span>
				</Link>

				{/* Hamburger Menu Icon - Visible only on mobile */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						{isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
					</button>
				</div>

				{/* Navigation Links and Wallet Button - Aligned to the right */}
				<div className="hidden lg:flex items-center space-x-6 ml-auto">
					<Link href="/development" className="hover:text-blue-500">
						Development Tools
					</Link>
					<a href="#footer" className="hover:text-blue-500">
						Contact Us
					</a>
					<a href="#faq" className="hover:text-blue-500">
						Help
					</a>
					<Link href="/cart" className="hover:text-blue-500">
						<div className="relative">
							<FiShoppingCart size={20} />
							{cartCount > 0 && (
								<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
									{cartCount}
								</span>
							)}
						</div>
					</Link>
					<button className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
						<FiUser className="inline mr-2" /> Become a merchant
					</button>
				</div>
			</div>

			{/* Dropdown menu for mobile */}
			{isOpen && (
				<div className="lg:hidden flex flex-col items-start space-y-4 mt-4">
					<Link href="/development" className="hover:text-blue-500">
						Development Tools
					</Link>
					<a href="#footer" className="hover:text-blue-500">
						Contact Us
					</a>
					<a href="#faq" className="hover:text-blue-500">
						Help
					</a>
					<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
						Become a merchant
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
