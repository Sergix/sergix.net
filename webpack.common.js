const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      template: path.resolve(__dirname, 'assets/html/research.html'),
      filename: path.resolve(__dirname, 'research/index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/index.html'),
      filename: path.resolve(__dirname, 'index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/projects.html'),
      filename: path.resolve(__dirname, 'projects/index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/jterm.html'),
      filename: path.resolve(__dirname, 'projects/jterm.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/canvas5.html'),
      filename: path.resolve(__dirname, 'projects/canvas5.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/root.html'),
      filename: path.resolve(__dirname, 'projects/root.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/design.html'),
      filename: path.resolve(__dirname, 'design/index.html')
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'assets/html/wrapper.html'),
      filename: path.resolve(__dirname, 'projects/wrapper.html')
    }),
  ]
}