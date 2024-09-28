// components/Navbar.js
"use client"; // Marking this as a client component

import { useState } from "react";

export default function Navbar() {
	const [activeTab, setActiveTab] = useState("All");

	return (
		<nav className="flex justify-center space-x-6 p-6">
			{[
				"All",
				"Art",
				"Gaming",
				"Software",
				"Photography",
				"Music",
			].map((tab) => (
				<button
					key={tab}
					className={`text-lg font-medium ${
						activeTab === tab ? "text-purple-300" : "text-white"
					} hover:text-purple-400`}
					onClick={() => setActiveTab(tab)}
				>
					{tab}
				</button>
			))}
		</nav>
	);
}
