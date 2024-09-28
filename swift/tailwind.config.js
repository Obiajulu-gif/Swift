/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        purple: {
          900: '#4B0082', // Dark Purple
          800: '#6A0DAD', // Lighter purple for backgrounds
          600: '#9B30FF', // For buttons
        },
      },
    },
  },
  plugins: [],
};
