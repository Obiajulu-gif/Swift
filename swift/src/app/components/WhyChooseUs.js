import React from "react";
import { FiShoppingCart, FiClock, FiShield, FiUsers } from "react-icons/fi";

const WhyChooseUs = () => {
	return (
		<section className="py-16 bg-white">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-black">
					Why Choose Our <span className="text-orange-500">Marketplace?</span>
				</h2>
			</div>
			{/* Feature Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
				{/* Feature 1 */}
				<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<div className="flex justify-center items-center mb-4 text-orange-500 text-5xl">
						<FiShoppingCart />
					</div>
					<h3 className="text-lg font-bold text-black">
						Seamless Integration with Blockchain
					</h3>
					<p className="text-gray-500 mt-2">
						Easily incorporate secure, transparent tools into your applications.
					</p>
				</div>

				{/* Feature 2 */}
				<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<div className="flex justify-center items-center mb-4 text-orange-500 text-5xl">
						<FiClock />
					</div>
					<h3 className="text-lg font-bold text-black">
						Accelerated Development
					</h3>
					<p className="text-gray-500 mt-2">
						Streamline workflows for faster builds and deployments.
					</p>
				</div>

				{/* Feature 3 */}
				<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<div className="flex justify-center items-center mb-4 text-orange-500 text-5xl">
						<FiShield />
					</div>
					<h3 className="text-lg font-bold text-black">
						Cost-Effective Solutions
					</h3>
					<p className="text-gray-500 mt-2">
						Centralized tools reduce expenses and simplify budgeting.
					</p>
				</div>

				{/* Feature 4 */}
				<div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<div className=" flex justify-center items-center mb-4 text-orange-500 text-5xl">
						<FiUsers />
					</div>
					<h3 className="text-lg font-bold text-black">Community Support</h3>
					<p className="text-gray-500 mt-2">
						Access valuable resources and collaborate with fellow developers.
					</p>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
