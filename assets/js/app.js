/*jslint node:true*/

if (module.hot) {
  module.hot.accept()
}

function requireAll(r) { r.keys().forEach(r) }

/* sass */
requireAll(require.context('../sass', true, /^(?!_).+.sass$/))
import '../../node_modules/bootstrap/scss/bootstrap.scss'

/* js */
const $ = require('jquery')
window.$ = $
requireAll(require.context('.', true, /\.js$/))

import * as bootstrap from 'bootstrap'
import * as loader from './loader'

// /* eslint-disable */
// (async function loadAsync() {
//   await import(/* webpackChunkName: "lazy" */ '../../node_modules/bootstrap/scss/bootstrap.scss')
// }())
// /* eslint-enable */

$(function() {
  loader.setEventHandlers()
  loader.load()
})