/* globals */
const typeInterval = 100,
  $el = $('.page-title')
let isRunningTransition = false,
  typeQueue = 0,
  inQueue = false

export const attachHoverHandler = element => {
  $(element)
    .on('touchstart', function () {
      $(this).addClass('hover')
    })
    .on('touchmove', function () {
      $(this).removeClass('hover')
    })
    .mouseenter(function () {
      $(this).addClass('hover')
    })
    .mouseleave(function () {
      $(this).removeClass('hover')
    })
    .click(function () {
      $(this).removeClass('hover')
    })
}

export const attachClickHandler = element => {
  $(element).on('click touchstart', function (e) {
    if (isMobile() && e.type === 'click') return
    else if (!isMobile() && e.type === 'touchstart') return

    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#links-wrapper').removeClass('active')
    } else {
      $(this).addClass('active')
      $('#links-wrapper').addClass('active')
    }
  })
}

export const requireAll = r => r.keys().forEach(r)

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)

export const bodyLoaderIconEnd = finish => {
  if (finish === true) {
    setTimeout(bodyLoaderIconEnd(true), 500)
    return
  }

  $('#body-loader').remove()
  $('body.loading > *').css('visibility', 'visible')
  $('body.loading > *').animate({ opacity: 1 }, 400)
  $('body').removeClass('loading')
}

export const getPage = () => {
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

export const changeTitle = newTitle => {
  // increment the queue
  typeQueue++

  // check if the function to be called will be placed
  // in the queue or called immediately
  if (typeQueue > 1) inQueue = true

  // start the process
  typeOutTitle(newTitle, typeQueue, inQueue)
}

export const typeOutTitle = async (newTitle, queueNumber, inQueue) => {
  // if a current typing out is in progress,
  // wait for the current one to finish before doing anything
  if (isRunningTransition)
    if (isRunningTransition) {
      window.setTimeout(
        () => typeOutTitle(newTitle, queueNumber, inQueue),
        typeInterval
      )
      return
    }

  // if we were in queue, then the queue count has decremented
  if (inQueue && queueNumber > 1) queueNumber--

  // if there is another ahead of us in the queue,
  // then quit this one
  if (queueNumber < typeQueue) {
    typeQueue--
    return
  }

  // start the transition
  isRunningTransition = true

  // if the current title already matches the start
  // of the new one,then just continue there
  if (newTitle.startsWith($el.text()) && $el.text() !== '') {
    typeOutTitleCallback(newTitle, $el.text().length, queueNumber)
    return
  }

  const removeInterval = setInterval(() => {
    // if the page title is now empty
    if ($el.text().length === 0) {
      // type out the new one
      typeOutTitleCallback(newTitle, 0, queueNumber)
      clearInterval(removeInterval)
    }

    // subtract one letter from the current title
    $el.text($el.text().substr(0, $el.text().length - 1))

    // if we have reached what the new title is going to be,
    // don't bother getting rid of the rest and retyping it
    if ($el.text() === newTitle) {
      typeQueue--
      isRunningTransition = false
      clearInterval(removeInterval)
    }
  }, typeInterval)
}

const typeOutTitleCallback = (newTitle, position, queueNumber) => {
  // if the title is blank, quit
  if (newTitle === undefined || newTitle === '') {
    isRunningTransition = false
    return
  }

  // start the typing out part
  const insertInterval = setInterval(() => {
    // if we have reached the end or if another transition
    // has been requested in the queue ahead of us, then quit
    if ($el.text().length === newTitle.length || queueNumber < typeQueue) {
      isRunningTransition = false
      typeQueue--
      clearInterval(insertInterval)
    }

    // print out the new title
    $el.append(newTitle[position])
    position++
  }, typeInterval)
}
