const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackExcludeEmptyAssetsPlugin = require('html-webpack-exclude-empty-assets-plugin')

module.exports = {
  entry: {
	  app: './assets/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/assets/dist/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/research.html'),
      filename: path.resolve(__dirname, 'research/index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/index.html'),
      filename: path.resolve(__dirname, 'index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/projects.html'),
      filename: path.resolve(__dirname, 'projects/index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/jterm.html'),
      filename: path.resolve(__dirname, 'projects/jterm.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/canvas5.html'),
      filename: path.resolve(__dirname, 'projects/canvas5.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/root.html'),
      filename: path.resolve(__dirname, 'projects/root.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/wrapper.html'),
      filename: path.resolve(__dirname, 'projects/wrapper.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      hash: true,
      template: path.resolve(__dirname, 'assets/html/design.html'),
      filename: path.resolve(__dirname, 'design/design.html')
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new HtmlWebpackExcludeEmptyAssetsPlugin(),
	  new CleanWebpackPlugin(['assets/dist'])
  ]
}