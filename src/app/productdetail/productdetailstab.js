"use client";
import React, { useState } from "react";

const ProductDetailsTabs = () => {
	const [activeTab, setActiveTab] = useState("details");

	return (
		<div className="max-w-screen-lg mx-auto py-8 px-4 lg:px-0">
			{/* Tabs */}
			<div className="border-b border-gray-200 mb-6">
				<nav className="flex space-x-4 lg:space-x-8 overflow-x-auto">
					<button
						className={`text-sm pb-4 ${
							activeTab === "details"
								? "text-orange-500 border-orange-500"
								: "text-gray-500"
						} font-semibold border-b-2 focus:outline-none`}
						onClick={() => setActiveTab("details")}
					>
						Details
					</button>
					<button
						className={`text-sm pb-4 ${
							activeTab === "comments"
								? "text-orange-500 border-orange-500"
								: "text-gray-500"
						} font-semibold border-b-2 focus:outline-none`}
						onClick={() => setActiveTab("comments")}
					>
						Comments
					</button>
				</nav>
			</div>

			{/* Tab Content */}
			<div className="flex flex-col lg:flex-row justify-between">
				{/* Left: Details or Comments Section */}
				<div className="lg:w-3/4 w-full mb-6 lg:mb-0">
					{activeTab === "details" ? (
						<div>
							<p className="text-gray-700 text-sm lg:text-base mb-4">
								Design a website for your business with this SaaS website UI Kit
								featuring multiple layouts, breakpoints, and 3D elements in
								different styles. Copy and paste your website design into Framer
								and publish as a real website or use the kit directly in Framer.
							</p>

							{/* Links */}
							<div className="space-y-2 text-sm lg:text-base">
								<a href="#" className="text-blue-500 hover:underline">
									Live Framer Demo Website →
								</a>
								<a href="#" className="text-blue-500 hover:underline">
									Figma to HTML with Framer Plugin →
								</a>
							</div>
						</div>
					) : (
						<div>
							{/* Comments Content Here */}
							<p>No comments yet.</p>
						</div>
					)}
				</div>

				{/* Right: Tags Section */}
				<div className="lg:w-1/4 w-full lg:pl-8">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h4 className="font-semibold mb-4">Tags</h4>
						<div className="flex flex-wrap gap-2">
							<span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
								User Interface Components
							</span>
							<span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
								Blockchain Explorers
							</span>
							<span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
								Development Frameworks
							</span>
							<span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
								Smart Contract Development Tools
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsTabs;
