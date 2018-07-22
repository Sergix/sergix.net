import 'jquery'
import * as Barba from 'barba.js'
import * as design from './design.js'
import * as project from './project.js'
import * as util from './util.js'

function loadPage(oldTitle, newTitle) {
  /* put the new .page-title in */
  var pageTitle = document.title.substr(7, document.title.length)
  util.typeOutTitle(pageTitle)

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
  $(document).on('click', function (e) {
    if (e.toElement.offsetParent === null || e.toElement.offsetParent.id !== 'links-open') {
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
}

export function load () {
  var page = util.getPage()
  loadPage('', page)

  /* load in any large pieces of content with ajax */
  $.get('/assets/ajax/head.html', function(data){
    $('head').prepend(data)
  })

  /* Barba.js handlers */
  var oldTitle, newTitle
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
      var _this = this
      var $el = $(this.newContainer)

      newTitle = util.getPage()

      loadPage(oldTitle, newTitle)

      $(this.oldContainer).hide()

      $el.css({
        visibility : 'visible',
        opacity : 0
      })

      $el.animate({ opacity: 1 }, 400, function() {
        _this.done() // remove old container
      })
    }
  })

  Barba.Pjax.getTransition = function() {
    return FadeTransition
  }

  Barba.Pjax.start()

}