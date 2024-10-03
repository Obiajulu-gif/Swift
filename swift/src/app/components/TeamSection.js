import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"; // Import Image component from next/image

const TeamSection = () => {
	const teamMembers = [
		{
			name: "Name",
			role: "Team Lead and Frontend Developer",
			image: "/images/team-lead.jpg",
		},
		{ name: "Name", role: "Team Role", image: "/images/team-member.jpg" },
		{ name: "Name", role: "Team Role", image: "/images/team-member.jpg" },
		{ name: "Name", role: "Team Role", image: "/images/team-member.jpg" },
		{ name: "Name", role: "Team Role", image: "/images/team-member.jpg" },
		{ name: "Name", role: "Team Role", image: "/images/team-member.jpg" },
	];

	return (
		<section className="py-16 bg-white">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold">
					Meet <span className="text-orange-500">The Team</span>
				</h2>
			</div>

			{/* Team Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
					>
						{/* Image Section */}
						<div className="w-full h-64 relative">
							<Image
								src={member.image}
								alt={member.name}
								layout="fill"
								objectFit="contain" // Change to "contain" to ensure the entire image fits within the container
								className="w-full h-full object-contain rounded-t-lg" // Add rounded corners to the top of the image
							/>
						</div>

						{/* Info Section */}
						<div className="flex justify-between items-center bg-white p-4">
							<div>
								<h3 className="text-lg font-bold">{member.name}</h3>
								<p className="text-sm text-gray-500">{member.role}</p>
							</div>
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<FaLinkedin size={24} />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TeamSection;
