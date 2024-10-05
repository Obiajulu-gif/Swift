// src/app/_document.js or src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>{/* Add custom <head> tags here */}</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
