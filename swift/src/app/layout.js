// No "use client" here, as it's server-side
export const metadata = {
	title: "Swift",
	description: "A platform to sell digital products",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children} {/* Render all child components/pages */}
			</body>
		</html>
	);
}
