/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// docs: https://www.npmjs.com/package/tailwind-fluid-typography
		fluidTypography: {},
		extend: {},
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
