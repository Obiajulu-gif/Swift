"use client"; // Ensure this is a client-side component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";
import { useWallet, WalletProvider, ConnectButton } from "@suiet/wallet-kit"; // Import from @suiet/wallet-kit
import "@suiet/wallet-kit/style.css"; // Wallet kit styles

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
	const [cartCount, setCartCount] = useState(0); // State for cart count
	const [isCartOpen, setIsCartOpen] = useState(false); // State for cart visibility
	const { account, connected, connect, disconnect } = useWallet(); // Wallet state

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
				<Link
					href="/"
					className="flex items-center cursor-pointer animate-pulse"
				>
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

				{/* Desktop Menu */}
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
						<FiShoppingCart size={40} />
						{cartCount > 0 && (
							<span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold bg-red-600 text-white rounded-full">
								{cartCount}
							</span>
						)}
					</div>

					{/* Wallet Connection */}
					{connected ? (
						// If the user is connected, show the wallet address
						<div className="text-white py-2 px-4 rounded-lg">
							{account?.address.slice(0, 6)}...{account?.address.slice(-4)}
						</div>
					) : (
						// If the user is not connected, show the Connect button
						<button
							onClick={connect} // Trigger the wallet connection
							className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
						>
							<FiUser className="inline mr-2" />
							Become a Merchant
						</button>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden">
					<div className="bg-black text-white space-y-4 p-4 flex flex-col items-start">
						<Link
							href="/development"
							className="hover:text-blue-500 w-full text-left"
						>
							Development Tools
						</Link>
						<Link
							href="/productdetail"
							className="hover:text-blue-500 w-full text-left"
						>
							Product
						</Link>
						<Link
							href="#footer"
							className="hover:text-blue-500 w-full text-left"
						>
							Contact Us
						</Link>
						<Link href="#faq" className="hover:text-blue-500 w-full text-left">
							Help
						</Link>
						<div
							onClick={toggleCart}
							className="relative cursor-pointer w-full text-left"
						>
							<FiShoppingCart size={40} />
							{cartCount > 0 && (
								<span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold bg-red-600 text-white rounded-full">
									{cartCount}
								</span>
							)}
						</div>

						{/* Mobile Wallet Connection */}
						{connected ? (
							<div className="text-white py-2 px-4 rounded-lg w-full">
								{account?.address.slice(0, 6)}...{account?.address.slice(-4)}
							</div>
						) : (
							<button
								onClick={connect}
								className="ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
							>
								<FiUser className="inline mr-2" />
								Become a Merchant
							</button>
						)}
					</div>
				</div>
			)}

			{isCartOpen && <Cart onClose={toggleCart} />}
		</nav>
	);
};

// Wrap the Navbar with the WalletProvider for wallet functionality
const NavbarWithWallet = () => {
	return (
		<WalletProvider>
			<Navbar />
		</WalletProvider>
	);
};

export default NavbarWithWallet;
