import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext"; 

export const metadata = {
  title: "Swift",
  description: "A platform to sell digital products",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			
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
