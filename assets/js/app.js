/*jslint node:true*/

if (module.hot) {
  module.hot.accept()
}

function requireAll(r) { r.keys().forEach(r) }

/* sass */
requireAll(require.context('../sass', true, /^(?!_).+.sass$/))

/* js */
const $ = require('jquery')
window.$ = $
import 'bootstrap'

requireAll(require.context('.', true, /\.js$/));

/* all resources that need to be loaded asyncronously go here */
(async function lazyLoad() {
  const bootstrap = await import(/* webpackChunkName: "lazy" */ '../../node_modules/bootstrap/scss/bootstrap.scss')
}())

$(function() {
  $(document).on("click", function (e) {
    if (e.toElement.offsetParent === null || e.toElement.offsetParent.id !== "links-open") {
      $('#links-open').removeClass('active')
      $('#links').removeClass('active')
    }
  })
  
  $('#links-open').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#links').removeClass('active')
    } else {
      $(this).addClass('active')
      $('#links').addClass('active')
    }
  })
})