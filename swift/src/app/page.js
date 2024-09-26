"use client";

import { useWallet } from "@suiet/wallet-kit"; // Correct package import
import { useEffect } from "react";

export default function Home() {
	const wallet = useWallet(); // Access wallet context

	const connectWallet = async () => {
		if (wallet) {
			try {
				await wallet.connect(); // Connect to the wallet
			} catch (error) {
				console.error("Connection failed:", error);
			}
		}
	};

	const disconnectWallet = async () => {
		if (wallet) {
			await wallet.disconnect(); // Disconnect from the wallet
		}
	};

	useEffect(() => {
		if (wallet && wallet.connected) {
			console.log("Connected wallet:", wallet.address);
		}
	}, [wallet]);

	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<header className="bg-white shadow">
				<div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold">My Marketing Platform</h1>
					<button
						onClick={wallet.connected ? disconnectWallet : connectWallet}
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
					>
						{wallet.connected
							? `Connected: ${wallet.address}`
							: "Connect to Wallet"}
					</button>
				</div>
			</header>

			<main className="flex-grow flex items-center justify-center">
				<h2 className="text-4xl font-bold">Welcome to the One of the largest Marketplace to trade your digital products</h2>
			</main>

			<footer className="bg-white py-4">
				<div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Swift Platform</p>				</div>
			</footer>
		</div>
	);
}
