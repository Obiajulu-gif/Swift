// pages/index.js (or app/page.js if using app directory)
import Image from "next/image";
import Navbar from "./components/navbar"; // Ensure this path is correct

export default function LandingPage() {
	return (
		<div className="min-h-screen text-white">
			{/* Header */}
			<header className="flex justify-between items-center p-6 bg-purple-800 shadow-md">
				<div className="flex items-center space-x-4">
					<div className="bg-white p-2 rounded-full">
						{/* Make sure your image file is in the 'public' folder */}
						<Image src="/opensea-logo.png" alt="logo" width={40} height={40} />
					</div>
					<h1 className="text-2xl font-bold">Swift Marketplace</h1>
				</div>
				<div className="flex space-x-6 items-center">
					<button className="text-sm font-medium hover:underline">Drops</button>
					<button className="text-sm font-medium hover:underline">Stats</button>
					<button className="text-sm font-medium hover:underline">
						Create
					</button>
					
					<button className="bg-blue-600 py-2 px-4 rounded-full">
						Connect wallet
					</button>
				</div>
			</header>
			{/* Tabs */}
      
      {/*********************************Navbar Section **********************************/}
      <Navbar /> 
      
			{/************************************* Content **************************************/}
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
							<h2 className="font-semibold text-xl">Anichess Orbs of Power</h2>
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
							<h2 className="font-semibold text-xl">Brava by Anna Carreras</h2>
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
		</div>
	);
}
