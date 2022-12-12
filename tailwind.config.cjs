/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			primary: ["'Inter'", 'sans serif'],
			// secondary: ["'FromTheStars'", 'display', 'sans serif'],
		},
		// docs: https://www.npmjs.com/package/tailwind-fluid-typography
		fluidTypography: {},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#007AFF',
					50: '#B8DAFF',
					100: '#A3CFFF',
					200: '#7ABAFF',
					300: '#52A5FF',
					400: '#298FFF',
					500: '#007AFF',
					600: '#005FC7',
					700: '#00448F',
					800: '#002957',
					900: '#000F1F'
				},
				warning: '#FF9500',
				error: '#FF3B30',
				success: '#34C759',
			}
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("tailwind-fluid-typography"),
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
}
