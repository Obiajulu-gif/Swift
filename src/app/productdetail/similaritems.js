import React from "react";
import Image from "next/image";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const SimilarItems = () => {
	const products = [
		{
			id: 1,
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png", // Replace with actual image paths
			price: "95.00",
			rating: 5,
			reviews: 91,
			seller: "Red Studios",
		},
		{
			id: 2,
			name: "DApp Designer Kit",
			image: "/images/DAPP.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
			seller: "Red Studios",
		},
		{
			id: 3,
			name: "Crypto Commerce Hub",
			image: "/images/BlockchainBuilder.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
			seller: "Red Studios",
		},
		{
			id: 4,
			name: "OpenAI GPT-4o mini",
			image: "/images/openai.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
			seller: "Red Studios",
		},
		{
			id: 5,
			name: "DataGuard Security Suite",
			image: "/images/dataguard.png",
			price: "95.00",
			rating: 5,
			reviews: 91,
			seller: "Red Studios",
		},
	];

	return (
		<div className="max-w-screen-lg mx-auto py-8">
			<h2 className="text-lg font-semibold mb-4 text-black">
				Similar Items You Might Like
			</h2>

			<div className="flex space-x-6 overflow-x-scroll no-scrollbar">
				{products.map((product) => (
					<div
						key={product.id}
						className="min-w-[250px] flex-shrink-0 border rounded-lg shadow-md p-4"
					>
						{/* Product Image */}
						<div className="relative w-full h-40 mb-4">
							<Image
								src={product.image}
								alt={product.name}
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>

						{/* Product Info */}
						<h3 className="text-sm font-semibold mb-1 text-black">{product.name}</h3>
						<p className="text-gray-500 text-xs mb-1">{product.seller}</p>
						<p className="text-gray-900 font-semibold mb-1">${product.price}</p>

						{/* Rating */}
						<div className="flex items-center text-sm mb-2">
							<div className="flex space-x-1 text-yellow-500">
								{Array(product.rating)
									.fill()
									.map((_, i) => (
										<FiStar key={i} />
									))}
							</div>
							<span className="text-gray-500 text-xs ml-2">
								({product.reviews})
							</span>
						</div>

						{/* Add to Cart Button */}
						<button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 text-xs">
							<FiShoppingCart className="mr-2" /> Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default SimilarItems;
