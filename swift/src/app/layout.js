import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

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
				{/*********************************Navbar Section **********************************/}
				<Navbar />
				<main>{children}</main> {/* Render all child components/pages */}
				<Footer />
			</body>
		</html>
	);
}
