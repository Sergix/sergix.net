// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// fonts
import '@/assets/css/tthoves.css'

// directives/plugins
import VueParallaxJs from 'vue-parallax-js'

// layouts
import DefaultLayout from '@/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueParallaxJs)

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
    content: 'Form follows function.',
  })

  head.meta.push({
    name: 'theme-color',
    content: '#FAB7AC',
  })

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap',
  })
}
