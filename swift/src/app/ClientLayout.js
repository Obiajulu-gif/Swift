"use client"; // This marks the file as a client component

import React from "react";
import { WalletProvider } from "@suiet/wallet-kit"; // Import WalletProvider from @suiet/wallet-kit
import "./globals.css"; // Import global styles

export default function ClientLayout({ children }) {
	return (
		<WalletProvider>
			{children} {/* Render all child components/pages */}
		</WalletProvider>
	);
}
