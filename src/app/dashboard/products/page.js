"use client";
import React from "react";
import Image from "next/image";
import { FiFilter, FiPlus } from "react-icons/fi";

const ProductDashboard = () => {
	const products = [
		{
			id: "#28373",
			name: "CodeCraftPro",
			details: "Red Silretos",
			totalPurchase: 43,
			qty: 1,
			amount: "$95.00",
			dateModified: "12/07/23",
			image: "/images/codeCraft.png",
		},
		{
			id: "#28373",
			name: "DApps Designer Kits",
			details: "20 purchases",
			totalPurchase: 20,
			qty: 1,
			amount: "$95.00",
			dateModified: "12/07/23",
			image: "/images/DAPP.png",
		},
		{
			id: "#28373",
			name: "CodeCraftPro",
			details: "2 purchases",
			totalPurchase: 2,
			qty: 1,
			amount: "$95.00",
			dateModified: "12/07/23",
			image: "/images/codeCraft.png",
		},
	];

	return (
		<div className="p-6 text-black">
			{/* Header and Button */}
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">Products</h2>
				<button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center">
					<FiPlus className="mr-2" /> New
				</button>
			</div>

			{/* Search, Date Filter, and General Filter */}
			<div className="flex justify-between items-center mb-4">
				<input
					type="text"
					placeholder="Search by Product Id"
					className="w-full max-w-sm border border-gray-300 rounded-lg py-2 px-4"
				/>
				<div className="flex space-x-2">
					<button className="border border-gray-300 rounded-lg py-2 px-4 flex items-center">
						Today <FiFilter className="ml-2" />
					</button>
					<button className="border border-gray-300 rounded-lg py-2 px-4 flex items-center">
						<FiFilter className="mr-2" /> Filter
					</button>
				</div>
			</div>

			{/* Product Table */}
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
					<thead>
						<tr className="bg-gray-100">
							<th className="px-4 py-2 text-left text-gray-600">Product ID</th>
							<th className="px-4 py-2 text-left text-gray-600">Product</th>
							<th className="px-4 py-2 text-left text-gray-600">Details</th>
							<th className="px-4 py-2 text-left text-gray-600">
								Total Purchase
							</th>
							<th className="px-4 py-2 text-left text-gray-600">Qty</th>
							<th className="px-4 py-2 text-left text-gray-600">Amount</th>
							<th className="px-4 py-2 text-left text-gray-600">
								Date Modified
							</th>
							<th className="px-4 py-2 text-left text-gray-600"></th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={index} className="border-t">
								<td className="px-4 py-2">{product.id}</td>
								<td className="px-4 py-2">
									<Image
										src={product.image}
										alt={product.name}
										width={40}
										height={40}
										className="rounded-lg"
									/>
								</td>
								<td className="px-4 py-2">{product.details}</td>
								<td className="px-4 py-2">{product.totalPurchase}</td>
								<td className="px-4 py-2">{product.qty}</td>
								<td className="px-4 py-2">{product.amount}</td>
								<td className="px-4 py-2">{product.dateModified}</td>
								<td className="px-4 py-2">
									<button className="text-gray-500 hover:text-gray-700">
										...
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="mt-4 flex justify-between items-center">
				<p className="text-gray-500">Showing 1 to 3 of 10 items</p>
				<div className="flex space-x-2">
					<button className="border border-gray-300 rounded-lg px-4 py-2">
						1
					</button>
					<button className="border border-gray-300 rounded-lg px-4 py-2">
						2
					</button>
					<button className="border border-gray-300 rounded-lg px-4 py-2">
						3
					</button>
					<button className="border border-gray-300 rounded-lg px-4 py-2">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDashboard;
