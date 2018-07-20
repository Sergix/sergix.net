import 'jquery'
import * as Barba from 'barba.js'
import * as design from './design.js'
import * as project from './project.js'

/* globals */
const typeInterval = 100
var isRunningTransition = false

/*  */
function getPage() {
  switch (document.title) {
    case '/sergix':
      return 'index'

    case '/sergix/design':
      return 'design'

    case '/sergix/projects':
      return 'projects'

    case '/sergix/projects/jterm':
    case '/sergix/projects/canvas5':
    case '/sergix/projects/wrapper':
    case '/sergix/projects/root':
      return 'project'

    case '/sergix/research':
      return 'research'
  }
}

async function typeOutTitle(newTitle) {
  if (isRunningTransition) {
    window.setTimeout(typeOutTitle, typeInterval)
    return
  }

  isRunningTransition = true

  var $el = $(".page-title")

  var removeInterval = setInterval(function() {
    if ($el.text().length === 0) {
      typeOutTitleCallback(newTitle)
      clearInterval(removeInterval)
    }

    $el.text($el.text().substr(0, $el.text().length - 1))

  }, typeInterval)
}

function typeOutTitleCallback(newTitle) {
  var $el = $(".page-title");

  if (newTitle === undefined) {
    isRunningTransition = false
    return
  }

  var i = newTitle.length
  var insertInterval = setInterval(function() {
    if ($el.text().length === newTitle.length) {
      isRunningTransition = false
      clearInterval(insertInterval)
    }

    $el.text(newTitle.substr(0, newTitle.length - i))
    i--;
  }, typeInterval)
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);
}

$(function(){
  //	if (is_mobile && localStorage.getItem('no-notif') === null) {
  //
  //	}

  /* do the cool little typing out crap I built */
  var pageTitle = document.title.substr(7, document.title.length)
  if (getPage() != 'index') {
    typeOutTitle(pageTitle)
  }

  /* do some class modification for the styling */
  $("main").addClass(getPage())

  if (getPage() === "index") {
    $("#links-open").addClass('index')
    $("#links-wrapper").addClass('index')
  } else if (getPage() === 'design') {
	  design.loadDesign()
  } else if (getPage() === 'project') {
    console.log('hello')
    project.loadProjectPage()
  }

  /* load in any extraneous content with ajax */
  $.get('/assets/html/head.html', function(data){
      $('head').prepend(data);
  });

  var oldTitle;
  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      oldTitle = getPage()
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

      /* do some more modification on page switch for styling */
      var newTitle = getPage()

      if (newTitle === 'index') {
        $("#links-open").addClass('index')
        $("#links-wrapper").addClass('index')
      } else {
        $("#links-open").removeClass('index')
        $("#links-wrapper").removeClass('index')
      }

	    if (newTitle === 'design') {
        design.loadDesign()
      } else if (newTitle === 'project') {
        project.loadProjectPage()
      }

      /* put the new page title in */
      pageTitle = document.title.substr(7, document.title.length)
      typeOutTitle(pageTitle)

      /* activate the new page styling */
      $("#barba-wrapper").removeClass(oldTitle).addClass(newTitle)

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        _this.done() // remove old container
      })
    }
  })

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  }

  Barba.Pjax.start();

})