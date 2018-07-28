const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

const plugins = []

const tree = function (dir, done) {
  const results = {
    'path': dir,
    'children': []
  }

  const list = fs.readdirSync(dir)

  let pending = list.length

  if (!pending) {
    return done(null, results)
  }

  list.forEach(function (file) {
    const stat = fs.statSync(dir + '/' + file)

    if (stat && stat.isDirectory()) {
      tree(dir + '/' + file, function (err, res) {
        results.children.push(res)
        if (!--pending) {
          done(null, results)
        }
      })
    } else {
      results.children.push({
        'path': dir + '/' + file
      })
      if (!--pending) {
        done(null, results)
      }
    }
  })
}

const addHtmlPlugins = function (files) {

  // empty directory
  if (fs.statSync(files.path).isDirectory() && !files.children) {
    return
  }

  files.children.forEach((dir) => {
    if (fs.statSync(dir.path).isFile()) {
      const fileViewPath = dir.path
        .substr(15, dir.path.length)
        .replace('.pug', '.html')

      // skip include files
      if (fileViewPath[0] === '_') {
        return
      }

      plugins.push(
        new HtmlWebpackPlugin({
          inlineSource: '.(js|css)$',
          template: path.resolve(__dirname, dir.path),
          filename: path.resolve(__dirname, fileViewPath)
        })
      )
    } else if (fs.statSync(dir.path).isDirectory()) {

      // then loop through it
      addHtmlPlugins(dir)
    }
  })
}

const htmlWebpack = function (err, files) {
  if (err) {
    console.error('ERROR: ' + err)
    process.exit(1)
  }

  addHtmlPlugins(files)
}

tree('./assets/views', htmlWebpack)

module.exports = {
  entry: {
	  app: './assets/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/assets/dist/'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: plugins
}