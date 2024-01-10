/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue'
	],
	theme: {
		colors: {
			dark: 'rgba(29,29,29,1.00)',
			red: 'rgba(231,57,56,1.00)'
		}
	},
	plugins: []
}
