import * as util from './util'
window.slick = require('slick-carousel')

export const loadProjectPage = () => {
  if (util.isMobile() && window.innerHeight > window.innerWidth) {
    $('.project-info').slick({
      arrows: false,
      autoplay: true,
      variableWidth: true,
      dots: true,
      rows: 1
    })
    $('.slick-dots > li > button').text('')
  } else {
    $('.row1').wrapAll('<section/>')
    $('.row2').wrapAll('<section/>')

    $('.project-info')
      .addClass('col-xs-offset-4 col-sm-offset-4 col-md-offset-4')

    $('.project-info > section')
      .addClass('col-sm-12 col-md-12 col-lg-12')

    $('.project-info > section > section')
      .addClass('col-sm-12 col-md-4 col-lg-4')
  }
}
