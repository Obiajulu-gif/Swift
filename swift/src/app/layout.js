import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
	title: "Swift",
	description: "A platform to sell digital products",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				
				{/*********************************Navbar Section **********************************/}
				<Navbar />
				<main>{children}</main> {/* Render all child components/pages */}
			</body>
		</html>
	);
}
