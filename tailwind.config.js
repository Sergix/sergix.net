const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      sans: ['"TT Hoves"', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['"Frank Ruhl Libre"', 'serif'],
    },
    extend: {
      colors: {
        primary: '#F78996',
        secondary: '#FAB7AC',
        background: '#EBEBEB',
        foreground: '#141414',
      },
      zIndex: {
        'neg-1': '-1',
      },
      maxWidth: {
        '32': '8em',
        '48': '12em',
        '64': '16em',
        'lg-screen': '96em',
      },
      width: {
        'lg-screen': '96em',
        '2xl': '38rem',
        '3xl': '48rem',
        '4xl': '56rem',
      },
      minHeight: {
        '24': '6em',
      },
      padding: {
        'button-fix': '0.35rem',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.gradient-primary': {
          background:
            'linear-gradient(180deg, rgba(250,183,172,1) 0%, rgba(247,137,150,1) 100%)',
        },
        '.gradient-primary-reversed': {
          background:
            'linear-gradient(180deg, rgba(247,137,150,1) 0%, rgba(250,183,172,1) 100%)',
        },
        '.gradient-primary-soft': {
          background:
            'linear-gradient(180deg, rgba(250,183,172,1) 0%, rgba(247,137,150,1) 50%)',
        },
      }

      addUtilities(newUtilities)
    }),
    plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          'font-weight': '500',
          'font-size': '1.125rem',
          'padding-top': '0.25rem',
          'padding-bottom': '0.25rem',
          'padding-left': '1.25rem',
          'padding-right': '1.25rem',
          position: 'relative',
        },
        '.btn-gradient-outline': {
          background: 'white',
          'background-clip': 'padding-box',
          border: 'solid 2px transparent',
          'border-radius': '0.375rem',
          '&:before': {
            background:
              'linear-gradient(180deg, rgba(250,183,172,1) 0%, rgba(247,137,150,1) 100%)',
            bottom: '0',
            content: '""',
            left: '0',
            margin: '-2px',
            position: 'absolute',
            right: '0',
            top: '0',
            'border-radius': 'inherit',
            'z-index': '-1',
          },
        },
      }

      addComponents(buttons)
    }),
  ],
}
