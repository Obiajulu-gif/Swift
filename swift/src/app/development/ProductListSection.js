import React from "react";
import Image from "next/image";
import {
	FiShoppingCart,
	FiHeart,
	FiStar,
	FiChevronLeft,
	FiChevronRight,
} from "react-icons/fi";

const ProductListSection = () => {
	const products = [
		{
			id: 1,
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
		},
		{
			id: 2,
			name: "Blockchain Builders",
			image: "/images/BlockchainBuilder.png",
			price: "95.00",
			rating: 4,
			reviews: 91,
		},
		{
			id: 3,
			name: "DApp Designer Kit",
			image: "/images/DAPP.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
		},
		{
			id: 4,
			name: "OpenAI GPT-4o mini",
			image: "/images/openai.png",
			price: "Free",
			rating: 5,
			reviews: 91,
		},
		{
			id: 5,
			name: "NFT Studio",
			image: "/images/NFTStudio.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
		},
		{
			id: 6,
			name: "DataGuard Security Suite",
			image: "/images/DAPP.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
		},
	];

	return (
		<div className="w-full">
			{/* Filter and Sort */}
			<div className="flex justify-between items-center mb-4">
				<div className="flex space-x-4">
					<span>Filters:</span>
					<select className="py-2 px-4 border border-orange-500 text-orange-500 rounded-lg">
						<option>Category (10)</option>
						{/* Add more filter options */}
					</select>
					<select className="py-2 px-4 border border-gray-300 rounded-lg">
						<option>Price Range</option>
					</select>
					<select className="py-2 px-4 border border-gray-300 rounded-lg">
						<option>Latest Releases</option>
					</select>
				</div>
				<div className="space-x-4">
					<span>Sort by:</span>
					<select className="py-2 px-4 border border-gray-300 rounded-lg">
						<option>Most Popular</option>
						<option>Price Low to High</option>
						<option>Price High to Low</option>
					</select>
				</div>
			</div>

			{/* Showing results info */}
			<div className="text-gray-500 text-sm mb-4">
				Showing 1-15 of 200 results
			</div>

			{/* Product Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<div key={product.id} className="border rounded-lg shadow-md p-4">
						<div className="relative w-full h-48">
							<Image
								src={product.image}
								alt={product.name}
								layout="fill"
								objectFit="cover"
								className="rounded-t-lg"
							/>
						</div>
						<h3 className="mt-4 text-lg font-bold">{product.name}</h3>
						<p className="text-gray-500 mb-2">${product.price}</p>

						{/* Star Ratings */}
						<div className="flex items-center mb-2">
							{Array(product.rating)
								.fill()
								.map((_, i) => (
									<FiStar key={i} className="text-yellow-500" />
								))}
							<span className="text-sm text-gray-500 ml-2">
								{product.reviews} reviews
							</span>
						</div>

						{/* Seller */}
						<p className="text-gray-500 mb-4">Red Studios</p>

						{/* Actions */}
						<div className="flex justify-between items-center">
							<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
								<FiShoppingCart className="mr-2" /> Add to Cart
							</button>
							<button className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-lg">
								<FiHeart />
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Pagination */}
			<div className="flex justify-center mt-8 space-x-2 text-sm items-center">
				<button className="px-4 py-2 border rounded-lg flex items-center">
					<FiChevronLeft className="mr-2" /> Previous
				</button>
				<span className="text-gray-500">1</span>
				<span className="text-gray-500">2</span>
				<span className="text-orange-500 border border-orange-500 px-3 py-1 rounded-md">
					3
				</span>
				<span className="text-gray-500">...</span>
				<span className="text-gray-500">10</span>
				<span className="text-gray-500">11</span>
				<span className="text-gray-500">12</span>
				<button className="px-4 py-2 border rounded-lg flex items-center">
					Next <FiChevronRight className="ml-2" />
				</button>
			</div>
		</div>
	);
};

export default ProductListSection;
