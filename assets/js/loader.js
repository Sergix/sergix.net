import 'jquery'
import * as Barba from 'barba.js'
import * as design from './design.js'
import * as project from './project.js'
import * as util from './util.js'

export const loadPage = (oldTitle, newTitle) => {
  // put the new .page-title in
  util.changeTitle(
    document.title.substr(7, document.title.length)
  )

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
}

export const setEventHandlers = () => {
  const $el = $('#links-open')

  util.attachHoverHandler('#links-open')
  util.attachHoverHandler('.navbar-brand')

  $(document).on('click touchstart', function (e) {
    if (e.target.id !== 'links-open' &&
       (e.target.offsetParent === null ||
        e.target.offsetParent.id !== 'links-open'))
    {
      $el.removeClass('active')
      $('#links-wrapper').removeClass('active')
    }
  })

  $el.on('click touchstart', function (e) {
    if (util.isMobile() && e.type === 'click')
      return
    else if (!util.isMobile() && e.type === 'touchstart')
      return

    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#links-wrapper').removeClass('active')
    } else {
      $(this).addClass('active')
      $('#links-wrapper').addClass('active')
    }
  })
}

export const load = () => {
  loadPage('', util.getPage())

  /* load in any large pieces of content with ajax */
  $.get('/assets/ajax/head.html', (data) => $('head').prepend(data))

  /* Barba.js handlers */
  let oldTitle = ''
  const fadeTransition = Barba.BaseTransition.extend({
    start: () => {
      oldTitle = util.getPage()

      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this))
    },

    fadeOut: () => {
      return $(this.oldContainer).animate({ opacity: 0 }).promise()
    },

    fadeIn: () => {
      const $el = $(this.newContainer)

      loadPage(oldTitle, util.getPage())

      $(this.oldContainer).hide()

      $el.css({
        visibility : 'visible',
        opacity : 0
      })

      $el.animate({ opacity: 1 }, 400, () => {
        this.done()
      })
    }
  })

  Barba.Pjax.getTransition = () => {
    return fadeTransition
  }

  Barba.Pjax.start()

  util.bodyLoaderIconEnd()
}