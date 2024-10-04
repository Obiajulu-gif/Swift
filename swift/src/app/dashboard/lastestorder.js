"use client"
import React, { useState } from "react";
import { FiMoreVertical, FiFilter } from "react-icons/fi";

const LatestOrders = () => {
	const [orders] = useState([
		{
			id: "#28373",
			item: "CodeCraftPro",
			status: "Completed",
			amount: "$95.00",
		},
		{
			id: "#28373",
			item: "CodeCraftPro",
			status: "Declined",
			amount: "$95.00",
		},
		{
			id: "#28373",
			item: "CodeCraftPro",
			status: "Completed",
			amount: "$95.00",
		},
		{
			id: "#28373",
			item: "CodeCraftPro",
			status: "Completed",
			amount: "$95.00",
		},
	]);

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold">Latest Orders</h2>
				<button className="flex items-center space-x-1 px-3 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
					<FiFilter />
					<span>Filter</span>
				</button>
			</div>
			<table className="min-w-full table-auto">
				<thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
					<tr>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Order ID</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Items</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Status</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left">Amount</div>
						</th>
						<th className="p-2 whitespace-nowrap">
							<div className="font-semibold text-left"></div>
						</th>
					</tr>
				</thead>
				<tbody className="text-sm divide-y divide-gray-100">
					{orders.map((order, index) => (
						<tr key={index}>
							<td className="p-2 whitespace-nowrap">
								<div className="text-left font-medium text-gray-800">
									{order.id}
								</div>
							</td>
							<td className="p-2 whitespace-nowrap">
								<div className="text-left">{order.item}</div>
							</td>
							<td className="p-2 whitespace-nowrap">
								<div
									className={`text-left font-semibold ${
										order.status === "Completed"
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									{order.status}
								</div>
							</td>
							<td className="p-2 whitespace-nowrap">
								<div className="text-left font-medium">{order.amount}</div>
							</td>
							<td className="p-2 whitespace-nowrap">
								<button className="text-gray-400 hover:text-gray-600">
									<FiMoreVertical />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="mt-4 flex justify-between items-center">
				<span className="text-sm text-gray-500">
					Showing 1 to 05 of 10 items
				</span>
				<div className="inline-flex">
					<button className="px-3 py-1 mx-1 text-sm font-medium text-gray-500 bg-gray-200 rounded">
						1
					</button>
					<button className="px-3 py-1 mx-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded">
						2
					</button>
					<button className="px-3 py-1 mx-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded">
						3
					</button>
					<span className="px-3 py-1 mx-1 text-sm font-medium text-gray-500">
						...
					</span>
					<button className="px-3 py-1 mx-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded">
						10
					</button>
				</div>
			</div>
		</div>
	);
};

export default LatestOrders;
