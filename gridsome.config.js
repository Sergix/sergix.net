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
    // {
    //   use: 'gridsome-source-storyblok',
    //   options: {
    //     client: {
    //       accessToken: 'lDVNOrqLOIoHwfw4WZbmFQtt',
    //     },
    //     version: 'published',
    //     typeName: 'Post',
    //   },
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        template: './src/templates/Post.vue',
        route: '/blog/:slug',
      },
    },
  ],
}
