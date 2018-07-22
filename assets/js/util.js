/* globals */
const typeInterval = 100
var isRunningTransition = false

export function getPage() {
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

export async function typeOutTitle(newTitle) {
  if (isRunningTransition) {
    window.setTimeout(typeOutTitle, typeInterval)
    return
  }

  isRunningTransition = true

  var $el = $('.page-title')

  var removeInterval = setInterval(function() {
    if ($el.text().length === 0) {
      typeOutTitleCallback(newTitle)
      clearInterval(removeInterval)
    }

    $el.text($el.text().substr(0, $el.text().length - 1))

  }, typeInterval)
}

export function typeOutTitleCallback(newTitle) {
  var $el = $('.page-title')

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
    i--
  }, typeInterval)
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
}