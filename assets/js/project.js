window.slick = require('slick-carousel')

export function loadProjectPage() {
  var options = {
    arrows: false,
    autoplay: true,
    variableWidth: true,
    rows: 1
  }

  if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
    $('.project-info').slick(options)
  } else {
    $('.row1').wrapAll('<section/>')
    $('.row2').wrapAll('<section/>')
  }
}
