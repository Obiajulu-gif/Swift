import CategorySection from "./CategorySection";
import ProductListSection from "./ProductListSection";
import HeroSection from "./HeroSection"; // Ensure HeroSection is imported

export const metadata = {
	title: "Development ",
	description: "A platform to sell digital products",
	icons: {
		icon: "/images/logo.png",
	},
};
export default function DevelopmentPage() {
	return (
		<>
			{/* Hero Section */}
			<HeroSection />

			{/* Main content container */}
			<div className="container mx-auto p-4 lg:p-2">
				{/* Flex container for layout, with responsive adjustments */}
				<div className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-6">
					{/* Category Section: Hidden on mobile, visible on large screens */}
					<div className="hidden lg:block lg:w-1/4 mb-6 lg:mb-0">
						<CategorySection />
					</div>

					{/* Product List Section: Full width on mobile, takes more space on larger screens */}
					<div className="w-full lg:w-3/4">
						<ProductListSection />
					</div>
				</div>
			</div>
		</>
	);
}
