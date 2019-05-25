import 'jquery-longshadow'
import * as Barba from 'barba.js'
import * as design from './design.js'
import * as project from './project.js'
import * as util from './util.js'

export const loadPage = (oldTitle, newTitle) => {
  // put the new .page-title in
  util.changeTitle(document.title.substr(7, document.title.length))

  // do some class modification for the styling
  $('#barba-wrapper')
    .removeClass(oldTitle)
    .addClass(newTitle)

  if (newTitle === 'index') {
    $('#links-open').addClass('index')
    $('#links-wrapper').addClass('index')
  } else if ($('#links-open').hasClass('index')) {
    $('#links-open').removeClass('index')
    $('#links-wrapper').removeClass('index')
  }

  // load special content
  if (newTitle === 'design') {
    design.loadDesign()
  } else if (newTitle === 'project') {
    project.loadProjectPage()
  }

  // long shadow for index page
  $('#short-description > h1').longShadow({
    colorShadow: '#ddd',
    sizeShadow: 1000,
    directionShadow: 'bottom-right'
  })
}

export const setEventHandlers = () => {
  util.attachHoverHandler('#links-open')
  util.attachHoverHandler('.navbar-brand')
  //util.attachHoverHandler('')

  util.attachClickHandler('#links-open')

  $(document).on('click touchstart', function (e) {
    if (
      e.target.id !== 'links-open' &&
      (e.target.offsetParent === null ||
        e.target.offsetParent.id !== 'links-open')
    ) {
      $('#links-open').removeClass('active')
      $('#links-wrapper').removeClass('active')
    }
  })
}

export const load = () => {
  loadPage('', util.getPage())

  /* Barba.js handlers */
  let oldTitle = ''
  const fadeTransition = Barba.BaseTransition.extend({
    start: function () {
      oldTitle = util.getPage()

      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      )
    },

    fadeOut: function () {
      return $(this.oldContainer)
        .animate({ opacity: 0 })
        .promise()
    },

    fadeIn: function () {
      const $el = $(this.newContainer)

      loadPage(oldTitle, util.getPage())

      $(this.oldContainer).hide()

      $el.css({
        visibility: 'visible',
        opacity: 0
      })

      $el.animate({ opacity: 1 }, 400, () => {
        this.done()
      })
    }
  })

  Barba.Pjax.getTransition = function () {
    return fadeTransition
  }

  Barba.Pjax.start()

  util.bodyLoaderIconEnd()
}
