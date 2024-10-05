// src/app/dashboard/page.js
import React from "react";
import DashboardLayout from "./DashboardLayout"; // Import the new layout
import StatsCards from "./statscard";
import LatestOrders from "./lastestorder";
import TrendingProducts from "./trendingproduct";
export const metadata = {
  title: "User Dashboard",
  description: "A platform to sell digital products",
  icons: {
    icon: "/images/logo.png",
  },
};
const MainDashboard = () => {
	return (
		<>
			{/* Stats Cards */}
			<StatsCards />

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Latest Orders */}
				<div className="col-span-2">
					<LatestOrders />
				</div>

				{/* Trending Products */}
				<div>
					<TrendingProducts />
				</div>
			</div>
		</>
	);
};

export default MainDashboard;
