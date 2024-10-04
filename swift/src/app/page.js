// pages/index.js (or app/page.js if using app directory)
import Image from "next/image";
import Hero from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamSection from "./components/TeamSection";
import FAQSection from "./components/FAQSection";
import HeroSectionBottom from "./components/HeroSectionBottom";
export const metadata = {
  title: "Swift",
  description: "A platform to sell digital products",
  icons: {
    icon: "/images/logo.png",
  },
};
export default function LandingPage() {
	return (
		<div className="min-h-screen text-white">
			<Hero />
			<ServicesSection />
			<WhyChooseUs />
			<TeamSection />
			<FAQSection />
			<HeroSectionBottom />
		</div>
	);
}
