const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/assets/dist/'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: [/\.sass$/, /\.scss$/, /\.css$/],
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'url-loader',
           options: {
             limit: 8192
           }
         }
       ]
     }
    ]
  }
})