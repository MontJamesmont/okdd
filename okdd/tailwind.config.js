const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: theme.borderRadius.md,
        '0.5xl': '.625rem'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover']
    },
  },
  plugins: [],
}
