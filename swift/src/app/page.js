// pages/index.js (or app/page.js if using app directory)
import Image from "next/image";
import RootLayout from "./layout";

export default function LandingPage() {
	return (
		<div className="min-h-screen text-white">
			<RootLayout>
				<main className="p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Card 1 */}
						<div className="bg-purple-800 rounded-lg shadow-lg overflow-hidden">
							<Image
								src="/nft-image-1.jpg" // Ensure the image is in the public folder
								alt="NFT Image"
								width={400}
								height={400}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="font-semibold text-xl">
									Anichess Orbs of Power
								</h2>
								<p className="text-gray-400">Floor: 0.04 POL</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-purple-800 rounded-lg shadow-lg overflow-hidden">
							<Image
								src="/nft-image-2.jpg" // Ensure the image is in the public folder
								alt="NFT Image"
								width={400}
								height={400}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="font-semibold text-xl">Shadows ~ by m0dest</h2>
								<p className="text-gray-400">Floor: 0.2 ETH</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-purple-800 rounded-lg shadow-lg overflow-hidden">
							<Image
								src="/nft-image-3.jpg" // Ensure the image is in the public folder
								alt="NFT Image"
								width={400}
								height={400}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="font-semibold text-xl">
									Brava by Anna Carreras
								</h2>
								<p className="text-gray-400">Floor: 0.15 ETH</p>
							</div>
						</div>

						{/* Card 4 */}
						<div className="bg-purple-800 rounded-lg shadow-lg overflow-hidden">
							<Image
								src="/nft-image-4.jpg" // Ensure the image is in the public folder
								alt="NFT Image"
								width={400}
								height={400}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h2 className="font-semibold text-xl">Mystical Woodland</h2>
								<p className="text-gray-400">Floor: 0.23 ETH</p>
							</div>
						</div>
					</div>
				</main>
			</RootLayout>
		</div>
	);
}
