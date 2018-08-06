const webpack =
  require('webpack')
const merge =
  require('webpack-merge')
const MinifyPlugin =
  require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin =
  require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin =
  require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin =
  require('clean-webpack-plugin')
const common =
  require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new MinifyPlugin({
        cache: true,
        test: /\.js($|\?)/i,
        sourceMap: true,
        parallel: 4
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['assets/dist']),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
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
      },
      {
        test: /\.woff(2)$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
    ]
  }
})