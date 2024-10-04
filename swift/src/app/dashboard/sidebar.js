"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import to check the current route
import Link from "next/link";
import {
	FiHome,
	FiBox,
	FiSettings,
	FiUsers,
	FiMenu,
	FiX,
} from "react-icons/fi";
import Image from "next/image";

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const pathname = usePathname(); // Get current route

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const closeSidebarOnMobile = () => {
		setIsSidebarOpen(false); // Close sidebar after clicking a link in mobile view
	};

	const isActive = (route) => {
		return pathname === route
			? "text-orange-500 font-semibold"
			: "text-gray-500";
	};

	return (
		<div>
			{/* Mobile Top Bar with Hamburger Icon */}
			<div className="lg:hidden flex justify-between items-center bg-white shadow p-4">
				<button onClick={toggleSidebar}>
					{isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>
			</div>

			{/* Sidebar */}
			<aside
				className={`fixed lg:relative top-0 left-0 w-64 bg-white h-full border-r p-6 flex flex-col justify-between transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
			>
				{/* Top Section */}
				<div>
					{/* Logo visible on large screens */}
					<div className="hidden lg:flex items-center mb-10">
						<Image
							src="/images/logo.png"
							alt="SwiftTeam Logo"
							width={40}
							height={40}
						/>
						<h2 className="text-xl font-bold ml-2">SwiftTeam</h2>
					</div>

					{/* Menu Section */}
					<nav>
						<p className="uppercase text-sm text-gray-500 mb-4">Menu</p>
						<ul className="space-y-4">
							<li>
								<Link
									href="/dashboard"
									className={`flex items-center space-x-3 ${isActive(
										"/dashboard"
									)}`}
									onClick={closeSidebarOnMobile}
								>
									<FiHome />
									<span>Overview</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/orders"
									className={`flex items-center space-x-3 relative ${isActive(
										"/dashboard/orders"
									)}`}
									onClick={closeSidebarOnMobile}
								>
									<FiBox />
									<span>Orders</span>
									{/* Notification Badge */}
									<span className="absolute right-0 top-0 mt-1 mr-2 text-xs font-semibold leading-none text-white bg-orange-500 rounded-full px-2 py-1">
										21
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/products"
									className={`flex items-center space-x-3 ${isActive(
										"/dashboard/products"
									)}`}
									onClick={closeSidebarOnMobile}
								>
									<FiUsers />
									<span>Products</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/settings"
									className={`flex items-center space-x-3 ${isActive(
										"/dashboard/settings"
									)}`}
									onClick={closeSidebarOnMobile}
								>
									<FiSettings />
									<span>Settings</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				{/* Bottom Section - User Info */}
				<div className="mt-10">
					<div className="flex items-center space-x-3">
						{/* User Profile Picture */}
						<Image
							src="/images/teamLead.png"
							alt="User Profile"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div>
							<p>Emmanuel</p>
							<p className="text-sm text-gray-500">4CE2...17Bp</p>
						</div>
					</div>
				</div>
			</aside>

			{/* Mobile Backdrop */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
					onClick={toggleSidebar}
				></div>
			)}
		</div>
	);
};

export default Sidebar;
