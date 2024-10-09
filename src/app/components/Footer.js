import React from "react";
import { FiMail, FiPhone, FiGithub, FiTwitter } from "react-icons/fi";
import Image from "next/image"; // Importing Next.js Image component

const Footer = () => {
	// Get the current year dynamically
	const currentYear = new Date().getFullYear();

	return (
		<footer id="footer" className="bg-black text-white py-10">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
				{/* Logo Section */}
				<div>
					<div className="mb-4">
						{/* Using Next.js Image component */}
						<Image
							src="/images/logo.png"
							alt="SwiftTeam Logo"
							width={40}
							height={40}
							className="animate-pulse"
						/>
					</div>
					<p>
						{new Date().getFullYear()} All rights reserved. Made by SwiftTeam
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-lg font-bold mb-4">Quick Links</h4>
					<ul className="space-y-2">
						<li>
							<a href="#faq" className="hover:underline">
								Help
							</a>
						</li>
					</ul>
				</div>

				{/* Contacts */}
				<div>
					<h4 className="text-lg font-bold mb-4">Contacts</h4>
					<ul className="space-y-2">
						<li className="flex items-center">
							<FiMail className="mr-2" /> teamswift.sui@gmail.com
						</li>
						<li className="flex items-center">
							<FiPhone className="mr-2" /> +2349 0694 06647
						</li>
					</ul>
					{/* Social Icons */}
					<div className="flex space-x-4 mt-4">
						<a
							href="https://twitter.com/SuiTeamswift"
							className="hover:text-gray-400"
						>
							<FiTwitter size={20} />
						</a>
						<a
							href="https://github.com/Obiajulu-gif/Swift"
							className="hover:text-gray-400"
						>
							<FiGithub size={20} />
						</a>
					</div>
				</div>

				{/* Subscription Section */}
				<div>
					<h4 className="text-lg font-bold mb-4">
						Subscribe and never miss a post!
					</h4>
					<form className="flex items-center space-x-2">
						<input
							type="email"
							placeholder="Your email"
							className="py-2 px-4 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<button
							type="submit"
							className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg font-semibold"
						>
							Subscribe
						</button>
					</form>
					<p className="text-sm text-gray-400 mt-2">
						Subscribe to our newsletter to receive early discount offers,
						updates, and new product info.
					</p>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
				&copy; {currentYear} All rights reserved. Made by SwiftTeam.
			</div>
		</footer>
	);
};

export default Footer;
