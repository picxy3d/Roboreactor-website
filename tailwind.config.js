/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				blob: 'blob 10s infinite'
			},
			keyframes: {
				blob: {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)'
					},
					'25%': {
						transform: 'translate(30px, -60px) scale(1.2)'
					},
					'50%': {
						transform: 'translate(0, 12px) scale(1)'
					},
					'75%': {
						transform: 'translate(-27px, -20px) scale(0.8)'
					}
				}
			}
		}
	},
	plugins: [require('daisyui'), addDynamicIconSelectors()],
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		themes: [
			'night'
			// {
			//   roboreactor: {
			//     "primary": "#38bdf8",
			//     "primary-focus": "#08a5eb",
			//     "primary-content": "#002a3d",
			//     "secondary": "#818cf8",
			//     "secondary-focus": "#3a4bf4",
			//     "secondary-content": "#00074b",
			//     "accent": "#f471b5",
			//     "accent-focus": "#ef2f92",
			//     "accent-content": "#470025",
			//     "neutral": "#1e293b",
			//     "neutral-focus": "#273449",
			//     "neutral-content": "#b5cdf5",
			//     "base-100": "#0f172a",
			//     "base-200": "#0e1526",
			//     "base-300": "#0c1322",
			//     "base-content": "#b4c6ef",
			//     "info": "#0ca5e9",
			//     "info-content": "#caefff",
			//     "success": "#2dd4bf",
			//     "success-content": "#00332d",
			//     "warning": "#f4bf50",
			//     "warning-content": "#412c00",
			//     "error": "#ac566a",
			//     "error-content": "#49000b",

			//     "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
			//     "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
			//     "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			//     "--animation-btn": "0.25s", // duration of animation when you click on button
			//     "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			//     "--btn-text-case": "uppercase", // set default text transform for buttons
			//     "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			//     "--border-btn": "1px", // border width of buttons
			//     "--tab-border": "1px", // border width of tabs
			//     "--tab-radius": "0.5rem", // border radius of tabs
			//   },
			// },
		]
	}
};
