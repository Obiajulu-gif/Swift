import React from "react";
import Sidebar from "./sidebar";
import TopBar from "./topBar";

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar />
			<div className="flex-1 bg-gray-100">
				{/* Topbar */}
				<TopBar />
				{/* Main Content */}
				<main className="p-6 space-y-6">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
