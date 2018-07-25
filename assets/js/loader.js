import 'jquery'
import * as Barba from 'barba.js'
import * as design from './design.js'
import * as project from './project.js'
import * as util from './util.js'

function loadPage(oldTitle, newTitle) {
  /* put the new .page-title in */
  util.changeTitle(document.title.substr(7, document.title.length))

  /* do some class modification for the styling */
  $('#barba-wrapper').removeClass(oldTitle).addClass(newTitle)

  if (newTitle === 'index') {
    $('#links-open').addClass('index')
    $('#links-wrapper').addClass('index')
  } else if ($('#links-open').hasClass('index')) {
    $('#links-open').removeClass('index')
    $('#links-wrapper').removeClass('index')
  }

  /* load special content */
  if (newTitle === 'design') {
    design.loadDesign()
  } else if (newTitle === 'project') {
    project.loadProjectPage()
  }
}

export function setEventHandlers() {
  const $el = $('#links-open')

  util.attachHoverHandler('#links-open')
  // util.attachHoverHandler('#links > a')

  $(document).on('click touchststart', function (e) {
    if (e.target.id !== 'links-open' && (e.target.offsetParent === null || e.target.offsetParent.id !== 'links-open')) {
      $el.removeClass('active')
      $('#links').removeClass('active')
    }
  })

  $('#links-open').on('click touchstart', function (e) {
    if (util.isMobile() && e.type === 'click')
      return
    else if (!util.isMobile() && e.type === 'touchstart')
      return

    if ($(this).hasClass('active')) {
      console.log('removing')
      $(this).removeClass('active')
      $('#links').removeClass('active')
      return
    } else {
      console.log('adding')
      $(this).addClass('active')
      $('#links').addClass('active')
    }
  })
}

export function load() {
  loadPage('', util.getPage())

  /* load in any large pieces of content with ajax */
  $.get('/assets/ajax/head.html', function(data){
    $('head').prepend(data)
  })

  /* Barba.js handlers */
  var oldTitle
  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      oldTitle = util.getPage()

      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this))
    },

    fadeOut: function() {
      return $(this.oldContainer).animate({ opacity: 0 }).promise()
    },

    fadeIn: function() {
      var $el = $(this.newContainer)

      loadPage(oldTitle, util.getPage())

      $(this.oldContainer).hide()

      $el.css({
        visibility : 'visible',
        opacity : 0
      })

      $el.animate({ opacity: 1 }, 400, () => {
        this.done() // remove old container
      })
    }
  })

  Barba.Pjax.getTransition = function() {
    return FadeTransition
  }

  Barba.Pjax.start()

  util.bodyLoaderIconEnd()

}