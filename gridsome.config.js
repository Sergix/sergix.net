// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// Changes here require a server restart.

const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // add global stylesheets here
        path.resolve(__dirname, './src/assets/styles/_globals.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Sergix',
  siteUrl: 'https://sergix.net/',
  titleTemplate: '%s / Sergix',
  // plugins: [
  //   {
  //     use: '@gridsome/source-filesystem',
  //     options: {
  //       path: 'mode/**/*.md',
  //       typeName: 'Post',
  //       route: '/mode/:slug',
  //     },
  //   },
  // ],
  chainWebpack: config => {
    // style loading (https://gridsome.org/docs/assets-css)
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  },
}
