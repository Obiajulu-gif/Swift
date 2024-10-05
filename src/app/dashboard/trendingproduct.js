import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";

const TrendingProducts = () => {
	const trendingProducts = [
		{
			id: "#28373",
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png",
			amount: "$95.00",
		},
		{
			id: "#28373",
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png",
			amount: "$95.00",
		},
		{
			id: "#28373",
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png",
			amount: "$95.00",
		},
		{
			id: "#28373",
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png",
			amount: "$95.00",
		},
		{
			id: "#28373",
			name: "CodeCraft Pro",
			image: "/images/codeCraft.png",
			amount: "$95.00",
		},
	];

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold">Trending Products</h2>
				<button className="text-gray-400 hover:text-gray-600">
					<FiMoreVertical />
				</button>
			</div>
			<table className="min-w-full table-auto">
				<thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
					<tr>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Order ID</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Amount</div>
						</th>
					</tr>
				</thead>
				<tbody className="text-sm divide-y divide-gray-100">
					{trendingProducts.map((product, index) => (
						<tr key={index}>
							<td className="p-2 whitespace-nowrap">
								<div className="flex items-center">
									<Image
										src={product.image}
										alt={product.name}
										width={40}
										height={40}
										className="rounded-full"
									/>
									<div className="ml-2">
										<div className="text-gray-800 font-medium">
											{product.name}
										</div>
										<div className="text-gray-400 text-xs">{product.id}</div>
									</div>
								</div>
							</td>
							<td className="p-2 whitespace-nowrap">
								<div className="text-left font-medium text-gray-600">
									{product.amount}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TrendingProducts;
