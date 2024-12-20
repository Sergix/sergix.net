export default {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['"TT Hoves"', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['"Crimson Text"', 'Georgia', 'serif'],
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
  plugins: [
    function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.gradient-primary': {
          background: 'linear-gradient(180deg, rgba(250,183,172,1) 0%, rgba(247,137,150,1) 100%)'
        },
        '.gradient-primary-reversed': {
          background: 'linear-gradient(180deg, rgba(247,137,150,1) 0%, rgba(250,183,172,1) 100%)'
        },
        '.gradient-primary-soft': {
          background: 'linear-gradient(180deg, rgba(250,183,172,1) 0%, rgba(247,137,150,1) 50%)'
        }
      })
    }
  ]
}
