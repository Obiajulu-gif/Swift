import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
	return (
		<div className="relative overflow-hidden bg-gradient-to-b from-black to-orange-900 text-white py-16 px-8">
			{/* Hero Section */}
			<div className="relative z-10 max-w-screen-lg mx-auto text-left">
				{" "}
				<h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
					At Swift, we’re redefining how you buy, sell, and trade in the digital
					realm.
				</h1>
				<p className="text-lg sm:text-xl mb-6 mx-auto">
					Our innovative Web3 marketplace empowers creators, collectors, and
					investors to engage in a decentralized ecosystem where transparency
					and security are paramount.
				</p>
				{/* Search Bar */}
				<div className="space-x-2">
					<select className="py-3 px-4 rounded-l-lg bg-gray-800 text-white outline-none">
						<option value="all">All Filters</option>
					</select>
					<input
						type="text"
						placeholder="Search Tools Library"
						className="py-3 px-4 w-80 bg-gray-900 text-white rounded-r-lg outline-none"
					/>
					<button className="bg-orange-600 hover:bg-orange-700 py-3 px-6 rounded-lg">
						<FaSearch />
					</button>
				</div>
			</div>

			{/* Gear Image */}
			<div className="absolute right-0 bottom-0 w-1/2 sm:w-1/3 lg:w-1/4 opacity-80">
				<Image
					src="/images/gear.png" // Ensure this is the correct path to your gear image
					alt="Gear Image"
					width={800}
					height={800}
					objectFit="contain"
				/>
			</div>
		</div>
	);
}
