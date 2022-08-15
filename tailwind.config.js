module.exports = {
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
}
