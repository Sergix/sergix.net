// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// fonts
import '@/assets/css/tthoves.css'

// directives/plugins

// layouts
import DefaultLayout from '@/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // meta tags
  head.meta.push({
    name: 'keywords',
    content: 'Design,Programming,Blog,Portfolio',
  })

  head.meta.push({
    name: 'author',
    content: 'Peyton McGinnis',
  })

  head.meta.push({
    name: 'description',
    content: 'Designing and developing fast, responsive websites and web apps using modern and low-cost web technologies.',
  })

  head.meta.push({
    name: 'theme-color',
    content: '#F78996',
  })

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap',
  })

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Form follows function.`,
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: `https://sergix.dev/ogimage.png`,
  })
}
