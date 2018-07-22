import 'slick-carousel/slick/slick.css'
import '@fancyapps/fancybox/dist/jquery.fancybox.css'

import $ from 'jquery'
window.$ = $
window.jQuery = $
window.slick = require('slick-carousel')
window.fancybox = require('@fancyapps/fancybox')

export function loadDesign() {
  'use strict'

  var currentImage
  var i = 0

  $('.art').css('visibility', 'hidden')

  // loader
  $('.carousel').append('<img id="loader-icon" src="/assets/img/loaders/tail-spin.svg"/>')
  $('.carousel').append('<figure id="loader-progress">0</figure>')

  var images = ['abstract-project-desktop', 'aftershock-desktop', 'beneath-line-desktop', 'break', 'canvas5-2', 'canvas5-large', 'carry-me-away-phone', 'code-1', 'damaged-desktop', 'dark', 'dream-4', 'drip', 'edge-of-tomorrow', 'entryflow', 'error-nogradient', 'everything-black-desktop', 'fear', 'frame-of-mind', 'incongruety-4k', 'insomnia', 'make', 'open-your-eyes-desktop', 'perspective-desktop', 'phone-wallpaper', 'reverb2', 'revive-this-mind-simple', 'sergix', 'sergix-comment', 'sergix-hex-4k', 'sergix-hex-back-4k', 'stark-desktop', 'twisted-dreams-desktop', 'understand-desktop', 'wanderer', 'waveform', 'wrapper']
  var imageFiles = []

  function loadSlick() {
    $('.carousel').empty()

    $('.carousel').slick({
      arrows: false,
      variableWidth: true,
      centerMode: true,
      centerPadding: '60px',
      infinite: true,
    })

    for (i = 0; i < imageFiles.length; i++) {
      $('.carousel').slick('slickAdd', imageFiles[i].outerHTML)
    }

    $().fancybox({
      selector : '.slick-slide:not(.slick-cloned)',
      hash     : false
    })

    $('.art').css('visibility', 'visible')

    $('#before-button').on('click', function (e) {
      $('.carousel').slick('slickPrev')
    })

    $('#next-button').on('click', function (e) {
      $('.carousel').slick('slickNext')
    })
  }

  function loadImages() {
    if (i > images.length - 1)
      loadSlick()

    if (images[i] != undefined) {
      images[i] = '/assets/img/design/' + images[i] + '.png'

      currentImage = document.createElement('a')
      currentImage.href = images[i]
      currentImage.className = 'art no-barba'
      currentImage.setAttribute('data-fancybox', 'images')

      var img = new Image()
      img.src = images[i]
      img.onload = function() {
        $('#loader-progress').text( Math.ceil((i / images.length) * 100) )

        if (img.height > img.width)
          img.className = 'tall'

        currentImage.innerHTML = img.outerHTML
        imageFiles.push(currentImage)
        i++
        loadImages()
      }
    }
  }

  loadImages()
}
