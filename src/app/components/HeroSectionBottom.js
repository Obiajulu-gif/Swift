import React from "react";
import Link from "next/link";
const HeroSectionBottom = () => {
	return (
		<section className="bg-gradient-to-b from-black via-[#6B250E] via-[#FF5722] to-[#FFB299] text-white py-16 px-8 my-10 rounded-3xl shadow-2xl max-w-screen-lg mx-auto">
			{/* Hero Content */}
			<div className="text-center">
				<h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
					Build Faster with Sui Blockchain Tools.
				</h1>
				<p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
					A marketplace tailored for developers – discover the best tools, pay
					seamlessly, and get back to building faster.
				</p>
				<Link href="/dashboard">
					<button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold">
						Explore Sui Dev Tools
					</button>
				</Link>
			</div>
		</section>
	);
};

export default HeroSectionBottom;
