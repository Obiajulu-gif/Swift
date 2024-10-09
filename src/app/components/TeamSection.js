"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TeamSection = () => {
	const [visible, setVisible] = useState([]);
	const teamMembers = [
		{
			name: "Okoye Emmanuel Obiajulu",
			role: "Team Lead and Frontend Developer",
			image: "/images/teamLead.png",
		},
		{
			name: "Nwogu Victoria",
			role: "Content Writer",
			image: "/images/vee.jpg",
		},
		{
			name: "Joshua",
			role: "Backend Developer",
			image: "/images/joshua.jpg",
		},
		{
			name: "Nwofor Chigozie Israel",
			role: "Community Manager",
			image: "/images/israel.jpg",
		},
		{
			name: "David Elumelo",
			role: "UI/UX Designer",
			image: "/images/david.jpg",
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
			{ threshold: 0.2 }
		);

		const elements = sectionRef.current.querySelectorAll(".team-card");
		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-16 bg-gray-50">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-black">
					Meet <span className="text-orange-500">The Team</span>
				</h2>
			</div>

			{/* Team Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4">
				{teamMembers.map((member, index) => (
					<div
						id={`member-${index}`}
						key={index}
						className={`team-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
							visible.includes(`member-${index}`)
								? "opacity-100 translate-y-0 scale-100"
								: "opacity-0 translate-y-8 scale-90"
						} hover:scale-105`}
					>
						{/* Image Section */}
						<div className="relative w-full h-64">
							<Image
								src={member.image}
								alt={member.name}
								fill
								style={{ objectFit: "cover" }}
								className="rounded-t-lg"
							/>
						</div>

						{/* Info Section */}
						<div className="p-6">
							<h3 className="text-lg font-bold text-gray-800 mb-2">
								{member.name}
							</h3>
							<p className="text-sm text-gray-500">{member.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TeamSection;
