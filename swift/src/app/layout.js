// app/layout.js

import { WalletProvider } from "@suiet/wallet-kit"; // Import WalletProvider
import "./globals.css"; // Import global styles

export const metadata = {
	title: "Swift",
	description: "A platform to sell digital products",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<WalletProvider>
					{children} {/* Render all child components/pages */}
				</WalletProvider>
			</body>
		</html>
	);
}
