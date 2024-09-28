import "./globals.css";
import Image from "next/image";
import Navbar from "./components/navbar"; // Ensure this path is correct

export const metadata = {
	title: "Swift",
	description: "A platform to sell digital products",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{/* Header */}
				<header className="flex justify-between items-center p-6 bg-purple-800 shadow-md">
					<div className="flex items-center space-x-4">
						<div className="bg-white p-2 rounded-full">
							{/* Make sure your image file is in the 'public' folder */}
							<Image
								src="/opensea-logo.png"
								alt="logo"
								width={40}
								height={40}
							/>
						</div>
						<h1 className="text-2xl font-bold">Swift Marketplace</h1>
					</div>
					<div className="flex space-x-6 items-center">
						<button className="text-sm font-medium hover:underline">
							Drops
						</button>
						<button className="text-sm font-medium hover:underline">
							Stats
						</button>
						<button className="text-sm font-medium hover:underline">
							Create
						</button>

						{/*****************wait your smart contract here for connecting of wallet*********/}
						<button className="bg-blue-600 py-2 px-4 rounded-full">
							Connect wallet
						</button>
					</div>
				</header>
				{/*********************************Navbar Section **********************************/}
				<Navbar />
				{children} {/* Render all child components/pages */}
			</body>
		</html>
	);
}
