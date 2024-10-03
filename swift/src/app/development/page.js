import React from "react";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import ProductListSection from "./ProductListSection";

export default function DevelopmentPage() {
	return (
		<>
			<HeroSection />
			{/* Responsive flex container */}
			<div className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-8">
				{/* Category section: Full width on small screens, 1/4 width on large */}
				<div className="hidden lg:block w-full lg:w-1/4 mb-6 lg:mb-0">
					<CategorySection />
				</div>
				{/* Product list section: Full width on small screens, 3/4 width on large */}
				<div className="w-full lg:w-3/4">
					<ProductListSection />
				</div>
			</div>
		</>
	);
}
