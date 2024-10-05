import React from "react";
import Image from "next/image"; // Importing Next.js Image component

const ServicesSection = () => {
	// Create an array of objects representing the service cards
	const services = [
		{
			id: 1,
			image: "/images/dataguard.png", // Image URL
			title: "DataGuard Security Suite", // Title of the service
			provider: "By DataGuard Solutions", // Provider or creator
			description:
				"A robust security suite designed to protect sensitive data in real-time.", // Short description
		},
		{
			id: 2,
			image: "/images/codeCraft.png",
			title: "CodeCraft Pro",
			provider: "By CodeCraft Labs",
			description:
				"An all-in-one solution for rapid code development and deployment.",
		},
		{
			id: 3,
			image: "/images/BlockchainBuilder.png",
			title: "Blockchain Builders",
			provider: "By Blockchain Creators",
			description:
				"Build decentralized applications with powerful blockchain tools.",
		},
		{
			id: 4,
			image: "/images/DAPP.png",
			title: "DApp Designer Kit",
			provider: "By Decentralized Studio",
			description:
				"Create decentralized apps quickly and efficiently with this toolkit.",
		},
		{
			id: 5,
			image: "/images/NFTStudio.png",
			title: "DApp Designer Kit",
			provider: "By Decentralized Studio",
			description:
				"Create Non Funigible Token for your next apps.",
		},
		// Add more objects as needed
	];

	return (
		<section className="py-16 bg-gray-50">
			{/* Title and Subtitle */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-extrabold mb-4 text-black">
					<span className="text-orange-600">Build In Minutes,</span> Publish
					Projects In Seconds.
				</h1>
				<p className="text-gray-600 text-lg">
					Turn Your Ideas Into a Wealth. Select From Thousands of Free And
					Premium Products And Customize Them As You See Fit.
				</p>
			</div>

			{/* Filter Buttons */}
			<div className="flex flex-wrap justify-center gap-4 mb-12">
				<button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full sm:w-auto">
					All
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg w-full sm:w-auto">
					Development Frameworks
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg w-full sm:w-auto">
					Smart Contract Tools
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg w-full sm:w-auto">
					User Interface Components
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg w-full sm:w-auto">
					Blockchain Explorers
				</button>
				<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg w-full sm:w-auto">
					API Libraries
				</button>
				{/* Add more buttons as needed */}
			</div>

			{/* Service Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 sm:mx-8 lg:mx-20">
				{services.map((service) => (
					<div
						key={service.id}
						className="border p-6 rounded-lg bg-white hover:shadow-lg transition-shadow"
					>
						<div className="text-center mb-4">
							<Image
								src={service.image}
								alt={`${service.title} Icon`}
								width={300}
								height={300}
								className="mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">{service.title}</h3>
							<p className="text-gray-500">{service.provider}</p>
						</div>
						<p className="text-gray-600 text-center">{service.description}</p>
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
