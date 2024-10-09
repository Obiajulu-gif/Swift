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
		<div className="p-6 text-black bg-gradient-to-br from-orange-100 to-orange-50 min-h-screen">
			{/* Header and Button */}
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-3xl font-bold text-orange-600">Products</h2>
				<button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center transition-all duration-300">
					<FiPlus className="mr-2" /> New
				</button>
			</div>

			{/* Search, Date Filter, and General Filter */}
			<div className="flex justify-between items-center mb-6">
				<input
					type="text"
					placeholder="Search by Product Id"
					className="w-full max-w-sm border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
				/>
				<div className="flex space-x-2">
					<button className="border border-gray-300 rounded-lg py-2 px-4 flex items-center transition-all duration-300 hover:bg-gray-100">
						Today <FiFilter className="ml-2" />
					</button>
					<button className="border border-gray-300 rounded-lg py-2 px-4 flex items-center transition-all duration-300 hover:bg-gray-100">
						<FiFilter className="mr-2" /> Filter
					</button>
				</div>
			</div>

			{/* Product Table */}
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-300">
					<thead>
						<tr className="bg-orange-100">
							{["Product ID", "Product", "Details", "Total Purchase", "Qty", "Amount", "Date Modified", ""].map((heading) => (
								<th key={heading} className="px-4 py-2 text-left text-orange-800">
									{heading}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={index} className="border-t hover:bg-gray-50 transition-all duration-300">
								<td className="px-4 py-2">{product.id}</td>
								<td className="px-4 py-2">
									<Image src={product.image} alt={product.name} width={40} height={40} className="rounded-lg" />
								</td>
								<td className="px-4 py-2">{product.details}</td>
								<td className="px-4 py-2">{product.totalPurchase}</td>
								<td className="px-4 py-2">{product.qty}</td>
								<td className="px-4 py-2">{product.amount}</td>
								<td className="px-4 py-2">{product.dateModified}</td>
								<td className="px-4 py-2">
									<button className="text-gray-500 hover:text-gray-700 transition-all duration-300">...</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="mt-8 flex justify-between items-center">
				<p className="text-gray-500">Showing 1 to 3 of 10 items</p>
				<div className="flex space-x-2">
					{["1", "2", "3", "Next"].map((label, index) => (
						<button key={index} className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-gray-200">
							{label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDashboard;
