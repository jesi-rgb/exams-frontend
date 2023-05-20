const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'PP Object Sans', 'Helvetica', 'serif'],
        serif: ['Source Serif Pro', 'serif']
      }
    }
  },

  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      'corporate',
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#FFF',
          'primary-focus': '#999999',
          'primary-content': '#2A303C',
          secondary: '#aaa',
          'base-content': '#CCC'
        }
      }
    ]
  }
};

module.exports = config;
