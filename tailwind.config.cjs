const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        serif: ['Source Serif Pro']
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
