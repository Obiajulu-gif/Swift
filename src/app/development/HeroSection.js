import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
	return (
		<div className="relative overflow-hidden bg-gradient-to-b from-black to-orange-900 text-white py-16 px-6 sm:px-8">
			{/* Hero Content */}
			<div className="relative z-10 max-w-screen-md mx-auto text-center sm:text-left">
				<h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
					At Swift, we’re redefining how you buy, sell, and trade in the digital
					realm.
				</h1>
				<p className="text-base sm:text-lg mb-6">
					Our innovative Web3 marketplace empowers creators, collectors, and
					investors to engage in a decentralized ecosystem where transparency
					and security are paramount...
				</p>

				{/* Search Bar */}
				<div className="flex flex-col sm:flex-row items-center sm:space-x-2 mt-4 sm:mt-6">
					<select className="py-2 px-4 rounded-lg bg-gray-800 text-white outline-none mb-2 sm:mb-0 sm:rounded-l-lg sm:rounded-r-none w-full sm:w-auto">
						<option value="all">All Filters</option>
					</select>
					<input
						type="text"
						placeholder="Search Tools Library"
						className="py-2 px-4 bg-gray-900 text-white rounded-lg outline-none w-full sm:w-auto sm:rounded-none sm:rounded-r-none mb-2 sm:mb-0"
					/>
					<button className="w-full sm:w-auto py-2 px-4 bg-orange-600 hover:bg-orange-700 rounded-lg sm:rounded-l-none sm:rounded-r-lg flex items-center justify-center transition-colors duration-300">
						<FaSearch />
					</button>
				</div>
			</div>

			{/* Gear Image */}
			<div className="absolute -right-10 bottom-0 w-1/2 sm:w-1/3 lg:w-1/4 opacity-70">
				<Image
					src="/images/gear.png"
					alt="Gear Image"
					width={800}
					height={800}
					objectFit="contain"
					className="pointer-events-none"
				/>
			</div>
		</div>
	);
}
