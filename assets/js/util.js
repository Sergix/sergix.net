/* globals */
const typeInterval = 100
var isRunningTransition = false
var typeQueue = 0

function once(fn, context) {
  var result
  return function() {
    if (fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  }
}

export const requireAll = (r) =>
  r.keys().forEach(r)

export function bodyLoaderIconEnd() {
  $('#body-loader').remove()
  $('body.loading > *').css('visibility', 'visible')
  $('body.loading > *').animate({ opacity: 1 }, 400)
  $('body').removeClass('loading')
}

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

export function changeTitle(newTitle) {
  // increment the queue
  typeQueue++

  // check and see if the function to be called will be placed in the queue or called immediately
  var inQueue = false
  if (typeQueue > 1)
    inQueue = true

  // start the process
  typeOutTitle(newTitle, typeQueue, inQueue)
}

async function typeOutTitle(newTitle, queueNumber, inQueue) {

  // if a current typing out is in progress, wait for the current one to finish before doing anything
  if (isRunningTransition) {
    window.setTimeout(() => typeOutTitle(newTitle, queueNumber, inQueue), typeInterval)
    return
  }

  // if we were in queue, then the queue count has decremented
  if (inQueue)
    queueNumber--

  // if there is another ahead of us in the queue, then quit this one
  if (queueNumber < typeQueue) {
    typeQueue--
    return
  }

  // start the transition
  isRunningTransition = true

  // grab the element
  var $el = $('.page-title')

  var removeInterval = setInterval(function() {
    // if the page title is now empty
    if ($el.text().length === 0) {
      // type out the new one
      typeOutTitleCallback(newTitle, queueNumber)
      clearInterval(removeInterval)
    }

    // subtract one letter from the current title
    $el.text($el.text().substr(0, $el.text().length - 1))

    // if we have reached what the new title is going to be, don't bother getting rid of the rest and retyping it
    if ($el.text() === newTitle) {
      typeQueue--
      isRunningTransition = false
      clearInterval(removeInterval)
    }

  }, typeInterval)
}

function typeOutTitleCallback(newTitle, queueNumber) {
  // grab the element
  var $el = $('.page-title')

  // if the title is blank, quit
  if (newTitle === undefined || newTitle === '') {
    isRunningTransition = false
    return
  }

  // start the typing out part
  var i = newTitle.length
  var insertInterval = setInterval(function() {
    // if we have reached the end or if another transition has been requested in the queue ahead of us, then quit
    if ($el.text().length === newTitle.length || queueNumber < typeQueue) {
      isRunningTransition = false
      typeQueue--
      clearInterval(insertInterval)
    }

    // print out the new title
    $el.text(newTitle.substr(0, newTitle.length - i))
    i--
  }, typeInterval)
}

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)