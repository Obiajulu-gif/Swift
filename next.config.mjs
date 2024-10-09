// next.config.mjs

import fs from "fs";

export default {
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			ignored: [
				"**/node_modules/**",
				"**/.git/**",
				"**/pagefile.sys", // Explicitly ignore pagefile.sys
				"**/swapfile.sys", // Add any other system files if needed
			],
		};
		return config;
	},
};
