import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
import { CartProvider } from "./components/CartContext"; 

export const metadata = {
	title: "Swift",
	description: "A platform to sell digital products",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				{/* Add the favicon */}
				<link rel="icon" href="/images/logo.png" />
			</Head>
			<body>
				<CartProvider>
					<Navbar />
					<main>{children}</main> 
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
