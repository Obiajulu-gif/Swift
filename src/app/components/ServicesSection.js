"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ServicesSection = () => {
	const [visible, setVisible] = useState([]);

	const services = [
		{
			id: 1,
			image: "/images/dataguard.png",
			title: "DataGuard Security Suite",
			provider: "By DataGuard Solutions",
			description:
				"A robust security suite designed to protect sensitive data in real-time.",
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
			title: "NFT Studio",
			provider: "By Decentralized Studio",
			description: "Create Non-Fungible Tokens for your next apps.",
		},
	];

	const sectionRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible((prevVisible) => [...prevVisible, entry.target.id]);
					}
				});
			},
			{ threshold: 0.3 }
		);

		const elements = sectionRef.current.querySelectorAll(".service-card");
		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-16 bg-gray-50">
			<div className="text-center mb-12 px-4 sm:px-0">
				<h1 className="text-4xl font-extrabold mb-4 text-black">
					<span className="text-orange-600">Build In Minutes,</span> Publish
					Projects In Seconds.
				</h1>
				<p className="text-gray-600 text-lg">
					Turn Your Ideas Into Wealth. Select From Thousands of Free And Premium
					Products And Customize Them As You Wish.
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
				{[
					"All",
					"Development Frameworks",
					"Smart Contract Tools",
					"User Interface Components",
					"Blockchain Explorers",
					"API Libraries",
				].map((filter) => (
					<button
						key={filter}
						className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg w-full sm:w-auto hover:bg-orange-600 hover:text-white transition-colors duration-300"
					>
						{filter}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 sm:mx-8 lg:mx-20">
				{services.map((service) => (
					<div
						id={`service-${service.id}`}
						key={service.id}
						className={`service-card border p-6 rounded-lg bg-white transform transition duration-500 ${
							visible.includes(`service-${service.id}`)
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
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

			<div className="text-center mt-12">
				<button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
					View All
				</button>
			</div>
		</section>
	);
};

export default ServicesSection;
