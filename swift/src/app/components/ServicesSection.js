import React from "react";

const ServicesSection = () => {
	return (
		<section className="py-16 bg-gray-50">
			{/* Title and Subtitle */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-extrabold mb-4 text-black">
					<span className="text-orange-600">Build In Minutes,</span> Publish
					Sites In Seconds.
				</h1>
				<p className="text-gray-600 text-lg">
					Turn Your Ideas Into a Real Website Quickly. Select From Thousands of
					Free And Premium Website Templates And Customize Them As You See Fit.
				</p>
			</div>

			{/* Filter Buttons */}
			<div className="flex justify-center space-x-4 mb-12">
				<button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
					All
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
					Development Frameworks
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
					Smart Contract Tools
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
					User Interface Components
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
					Blockchain Explorers
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
					API Libraries
				</button>
				{/* Add more buttons as needed */}
			</div>

			{/* Service Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 sm:mx-8 lg:mx-20">
				{[...Array(8)].map((_, index) => (
					<div
						key={index}
						className="border p-6 rounded-lg bg-white hover:shadow-lg transition-shadow"
					>
						<div className="text-center mb-4">
							<img
								src="/images/logo.png"
								alt="Service Icon"
								className="mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">OpenAI GPT-4o mini</h3>
							<p className="text-gray-500">By Azure OpenAI Service</p>
						</div>
						<p className="text-gray-600 text-center">
							An affordable, efficient AI solution for diverse text and image
							tasks.
						</p>
					</div>
				))}
			</div>
			{/* View All Button */}
			<div className="text-center mt-12">
				<button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow">
					View All
				</button>
			</div>
		</section>
	);
};

export default ServicesSection;
