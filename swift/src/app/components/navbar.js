"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Function to toggle the menu visibility
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-black text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo Section - Always visible */}
				<Link href="/" className="flex items-center cursor-pointer">
					<img
						src="/images/logo.png"
						alt="SwiftTeam Logo"
						className="h-10 w-10 animate-pulse"
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

				{/* Navigation Links - Visible on larger screens, hidden on mobile */}
				<div className="hidden lg:flex lg:space-x-6">
					<Link href="/development" className="hover:text-blue-500">
						Development Tools
					</Link>
					<Link href="/productdetail" className="hover:text-blue-500">
						Product
					</Link>

					<a href="#footer" className="hover:text-blue-500">
						Contact Us
					</a>
					<a href="#faq" className="hover:text-blue-500">
						Help
					</a>
				</div>

				{/* Wallet Button - Visible on larger screens */}
				<div className="hidden lg:block">
					<button className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg animation-bounce shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none">
						Connect Wallet
					</button>
				</div>
			</div>

			{/* Dropdown menu for mobile - Only visible when menu is open */}
			{isOpen && (
				<div className="lg:hidden flex flex-col items-start space-y-4 mt-4">
					<Link href="/development" className="hover:text-blue-500">
						Development Tools
					</Link>
					<Link href="/productdetail" className="hover:text-blue-500">
						Product
					</Link>
					<a href="#footer" className="hover:text-blue-500">
						Contact Us
					</a>
					<a href="#faq" className="hover:text-blue-500">
						Help
					</a>
					<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded animation-bounce shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none">
						Connect Wallet
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
