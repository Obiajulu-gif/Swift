import React from "react";
import Image from "next/image";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import { useCart } from "./CartContext"; 

const ProductListSection = () => {
	const { addToCart } = useCart(); // Get addToCart function from context

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
		// Other products...
	];

	return (
		<div className="w-full">
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

						{/* Add to Cart Button */}
						<button
							className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
							onClick={() => addToCart(product)}
						>
							<FiShoppingCart className="mr-2" /> Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductListSection;
