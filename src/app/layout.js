"use client";
import "./globals.css";
import { usePathname } from "next/navigation"; // Import usePathname for checking current path
import { CartProvider } from "./components/CartContext";

import Navbar from "./components/navbar"; // Ensure correct import path
import Footer from "./components/Footer";

import Sidebar from "./dashboard/sidebar";
import TopBar from "./dashboard/topbar";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
	const pathname = usePathname(); // Get the current pathname

	// Check if the current page is part of the dashboard
	const isDashboard = pathname.startsWith("/dashboard");

	return (
		<html lang="en">
			<body>
			<SessionProvider>

				<CartProvider>
					{isDashboard ? (
						// Dashboard layout with Sidebar and TopBar
						<div className="flex h-screen">
							<Sidebar />
							<div className="flex-1">
								<TopBar />
								<main className="p-6 space-y-6">{children}</main>
							</div>
						</div>
					) : (
						// Default layout with Navbar and Footer
						<>
							<Navbar />
							<main>{children}</main>
							<Footer />
						</>
					)}
				</CartProvider>
			</SessionProvider>
			</body>
		</html>
	);
}
