/*jslint node:true*/
import * as util from './util'
import * as loader from './loader'

if (module.hot) {
  module.hot.accept()
}

/* sass */
import '../../node_modules/bootstrap/scss/bootstrap.scss'
util.requireAll(require.context('../sass', true, /^(?!_).+.sass$/))

/* js */
const $ = require('jquery')
window.$ = $
util.requireAll(require.context('.', true, /\.js$/))

$(function() {
  loader.setEventHandlers()
  loader.load()
})