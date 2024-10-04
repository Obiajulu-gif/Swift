import React from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

const CategorySection = () => {
	const categories = [
		"Development Frameworks",
		"Smart Contract Development Tools",
		"User Interface Components",
		"Blockchain Explorers",
		"Testing and Debugging Tools",
		"API Libraries",
		"Deployment Tools",
		"Security Tools",
		"Analytics Tools",
		"Community and Learning Resources",
	];

	return (
		<div className="bg-white rounded-lg shadow-md w-3/4">
			<h2 className="text-xl font-bold mb-4">Categories</h2>

			{/* Search Box */}
			<div className="relative mb-4">
				<input
					type="text"
					placeholder="Search items..."
					className="py-2 px-4 w-full rounded-lg border border-gray-300 outline-none text-sm"
				/>
				<FiSearch className="absolute top-3 right-4 text-gray-400" />
			</div>

			{/* Category List */}
			<ul className="space-y-4">
				{categories.map((category, index) => (
					<li
						key={index}
						className="flex justify-between items-center cursor-pointer text-sm text-gray-600 hover:text-black"
					>
						<span>{category}</span>
						<FiPlus className="text-gray-400" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategorySection;
