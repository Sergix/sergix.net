// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// Changes here require a server restart.

module.exports = {
  siteName: 'sergix',
  siteUrl: 'https://sergix.dev/',
  titleTemplate: '%s / sergix',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
          },
          '/': {
            changefreq: 'monthly',
            priority: 0.8,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-monetization',
      options: {
        paymentPointer: '$ilp.uphold.com/8bJBkDmJDw4R',
      },
    },
  ],
}
