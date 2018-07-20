const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/assets/dist/'
  },
  module: {
    rules: [
      {
        test: [/\.sass$/, /\.scss$/, /\.css$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
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
  },
  plugins: [
    new ExtractTextPlugin('[name].sass')
  ]
})