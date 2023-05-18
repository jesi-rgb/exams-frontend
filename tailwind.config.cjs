const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['PP Object Sans', 'Helvetica', 'serif'],
				serif: ['Zodiak', 'serif']
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		darkTheme: 'halloween',
		lightTheme: 'corporate'
	}
};

module.exports = config;
