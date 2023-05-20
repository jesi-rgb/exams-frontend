const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible', 'Inter', 'PP Object Sans', 'Helvetica', 'serif'],
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
          primary: '#EEEDDD',
          'primary-focus': '#999999',
          'primary-content': '#2A303C',
          secondary: '#AAA',
          'secondary-content': '#2A303C',
          'base-content': '#CCC',
          'base-100': '#2A303C'
        }
      }
    ]
  }
};

module.exports = config;
