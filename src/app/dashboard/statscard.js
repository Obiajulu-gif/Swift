import React from "react";
import { FiEyeOff } from "react-icons/fi";

const StatsCards = () => {
	const stats = [
		{
			title: "Total Income",
			amount: "$40,330.00",
			icon: <FiEyeOff className="text-gray-400" size={24} />,
		},
		{
			title: "Total Sales",
			amount: "$4,330.00",
			icon: <FiEyeOff className="text-gray-400" size={24} />,
		},
		{
			title: "Total Orders",
			amount: "423",
			icon: <FiEyeOff className="text-gray-400" size={24} />,
		},
	];

	return (
		<>
			<div className="flex justify-between items-center mb-6 text-black">
				<h2 className="text-lg font-semibold">Overview</h2>
				{/* Date Filter */}
				<button className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center space-x-2">
					<span>Today</span>
					<FiEyeOff size={20} className="text-gray-400" />
				</button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-black">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
					>
						<div>
							<p className="text-sm text-gray-500">{stat.title}</p>
							<p className="text-2xl font-bold">{stat.amount}</p>
						</div>
						<div>{stat.icon}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default StatsCards;
