import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

const TopBar = () => {
	return (
		<header className="flex justify-between items-center py-4 px-6 bg-white border-b">
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search"
					className="border px-4 py-2 rounded-lg"
				/>
			</div>
			<div className="flex items-center space-x-4">
				<FiBell size={24} />
				<div className="flex items-center space-x-2">
					<span>4CE2...17Bp</span>
				</div>
			</div>
		</header>
	);
};

export default TopBar;
