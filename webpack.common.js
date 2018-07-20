const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
	  app: './assets/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, "assets/dist"),
    filename: '[name].bundle.js',
	chunkFilename: '[name].bundle.js'
  },
  plugins: [
	  new CleanWebpackPlugin(['dist'])
  ]
}