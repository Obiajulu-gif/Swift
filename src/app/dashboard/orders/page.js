"use client"
import React, { useState } from 'react';
import { FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Orders = () => {
    // Sample data for the orders
    const [orders, setOrders] = useState([
        { id: '#28373', item: 'CodeCraftPro', status: 'Completed', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'DApps Designer Kits', status: 'Declined', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'CodeCraftPro', status: 'Completed', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'DApps Designer Kits', status: 'Completed', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'CodeCraftPro', status: 'Completed', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'DApps Designer Kits', status: 'Completed', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'CodeCraftPro', status: 'Completed', amount: '95.00', date: '12/07/23' },
        { id: '#28373', item: 'DApps Designer Kits', status: 'Completed', amount: '95.00', date: '12/07/23' },
    ]);

    return (
			<div className="p-6 text-black">
				<h2 className="text-xl font-semibold mb-4">Orders</h2>

				{/* Search and Filter Section */}
				<div className="flex justify-between items-center mb-4">
					<input
						type="text"
						className="border rounded-lg py-2 px-4 w-full max-w-xs"
						placeholder="Search by Product Id"
					/>
					<div className="flex space-x-4">
						<button className="border rounded-lg py-2 px-4 flex items-center">
							<span className="mr-2">Today</span>
						</button>
						<button className="border rounded-lg py-2 px-4 flex items-center">
							<FiFilter className="mr-2" /> Filter
						</button>
					</div>
				</div>

				{/* Orders Table */}
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-gray-100">
								<th className="py-3 px-4">Order ID</th>
								<th className="py-3 px-4">Items</th>
								<th className="py-3 px-4">Status</th>
								<th className="py-3 px-4">Amount</th>
								<th className="py-3 px-4">Date</th>
								<th className="py-3 px-4"></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order, index) => (
								<tr key={index} className="border-b">
									<td className="py-3 px-4">{order.id}</td>
									<td className="py-3 px-4">{order.item}</td>
									<td
										className={`py-3 px-4 ${
											order.status === "Completed"
												? "text-green-500"
												: "text-red-500"
										}`}
									>
										{order.status}
									</td>
									<td className="py-3 px-4">${order.amount}</td>
									<td className="py-3 px-4">{order.date}</td>
									<td className="py-3 px-4">
										<button className="text-gray-500">
											<FiChevronRight />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination */}
				<div className="flex justify-between items-center mt-4">
					<div>Showing 1 to 5 of 10 items</div>
					<div className="flex items-center space-x-2">
						<button className="px-4 py-2 border rounded-lg flex items-center">
							<FiChevronLeft className="mr-2" /> Previous
						</button>
						<span className="text-gray-500">1</span>
						<span className="text-gray-500">2</span>
						<span className="text-gray-500">3</span>
						<button className="px-4 py-2 border rounded-lg flex items-center">
							Next <FiChevronRight className="ml-2" />
						</button>
					</div>
				</div>
			</div>
		);
};

export default Orders;
