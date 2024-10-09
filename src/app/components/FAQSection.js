"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const faqs = [
		{
			question: "Where can I find tutorials or guides?",
			answer: "Visit our resources page for tutorials, FAQs, and guides on using the marketplace.",
		},
		{
			question: "How can I stay updated on marketplace news?",
			answer: "Subscribe to our newsletter and follow us on social media for the latest updates and announcements.",
		},
		{
			question: "How do I buy or sell an asset?",
			answer: "To buy, simply connect your wallet, browse listings, and follow the prompts. To sell, list your asset with the desired price.",
		},
	];

	return (
		<section id="faq" className="py-16 px-6 bg-gray-100">
			<h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
				Frequently Asked Questions
			</h2>

			{/* FAQ List */}
			<div className="space-y-4 max-w-2xl mx-auto">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
					>
						<div
							className="flex justify-between items-center p-4 cursor-pointer"
							onClick={() => toggleFAQ(index)}
						>
							<h3 className={`text-lg font-medium ${openIndex === index ? "text-orange-500" : "text-gray-700"}`}>
								{faq.question}
							</h3>
							<FiPlus
								className={`text-2xl text-orange-500 transition-transform duration-300 ${
									openIndex === index ? "rotate-45" : ""
								}`}
							/>
						</div>
						{openIndex === index && (
							<div className="px-4 pb-4 text-gray-600">
								<p>{faq.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQSection;
