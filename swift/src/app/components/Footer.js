import React from "react";
import {
	FiMail,
	FiPhone,
	FiInstagram,
	FiTwitter,
	FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
	// Get the current year dynamically
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black text-white py-10">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
				{/* Logo Section */}
				<div>
					<div className="mb-4">
						<img
							src="/images/logo.png"
							alt="SwiftTeam Logo"
							className="h-10 w-auto"
						/>
					</div>
					<p>{new Date().getFullYear()} All rights reserved. Made by SwiftTeam</p>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-lg font-bold mb-4">Quick Links</h4>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:underline">
								Development Tools
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
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
							<FiMail className="mr-2" /> info@swiftteam
						</li>
						<li className="flex items-center">
							<FiPhone className="mr-2" /> 0903129414
						</li>
					</ul>
					{/* Social Icons */}
					<div className="flex space-x-4 mt-4">
						<a href="#" className="hover:text-gray-400">
							<FiInstagram size={20} />
						</a>
						<a href="#" className="hover:text-gray-400">
							<FiTwitter size={20} />
						</a>
						<a href="#" className="hover:text-gray-400">
							<FiLinkedin size={20} />
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
						*Subscribe to our newsletter to receive early discount offers,
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
