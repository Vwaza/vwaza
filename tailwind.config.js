/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Rampart: ['museo-sans', 'sans-serif']
			},
			colors: {
				vwazaBlue: {
					50: '#cce5ff',
					100: '#bfeaff',
					200: '#a3e3ff',
					300: '#87dcff',
					400: '#6bd5ff',
					500: '#002F62',
					600: '#002A59',
					700: '#002550',
					800: '#001F47',
					900: '#001A3E'
				}
			},
			textColor: {
				primary: '#002F62',
				secondary: '#252E41',
				light: '#CED5E0'
			}
		}
	},
	plugins: []
};
