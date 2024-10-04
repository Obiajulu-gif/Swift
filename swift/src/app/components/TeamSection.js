import React from "react";
import Image from "next/image"; // Import Image component from next/image

const TeamSection = () => {
	const teamMembers = [
		{
			name: "Okoye Emmanuel Obiajulu",
			role: "Team Lead and Frontend Developer",
			image: "/images/team-lead.jpg",
		},
		{
			name: "Joshua",
			role: "Backend Developer",
			image: "/images/team-member.jpg",
		},
		{
			name: "Nwogu Victoria",
			role: "Content Writer",
			image: "/images/team-member.jpg",
		},
		{
			name: "Nwofor Chigozie Israel",
			role: "Community Manager",
			image: "/images/team-member.jpg",
		},
		{
			name: "Victor Damian",
			role: "Frontend Developer",
			image: "/images/team-member.jpg",
		},
		{
			name: "David Elumelo",
			role: "UI/UX Designer",
			image: "/images/team-member.jpg",
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold">
					Meet <span className="text-orange-500">The Team</span>
				</h2>
			</div>

			{/* Team Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
					>
						{/* Image Section */}
						<div className="relative w-full h-64">
							<Image
								src={member.image}
								alt={member.name}
								fill
								style={{ objectFit: "cover" }} // Ensure the image covers the entire container
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
