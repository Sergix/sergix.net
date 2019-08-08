// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// fonts
import 'typeface-playfair-display'
import '@/assets/fonts/TTHoves.css'

// styles
import '@/assets/styles/_bulma.scss'
import '@/assets/styles/hamburgers/hamburgers.scss'

// directives/plugins
import Buefy from 'buefy'
import VueParallaxJs from 'vue-parallax-js'
import VueResponsive from 'vue-responsive'

import 'buefy/dist/buefy.css'

// layouts
import DefaultLayout from '@/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  Vue.use(VueParallaxJs)
  Vue.use(VueResponsive)

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
    content: 'Breaking the paradigm of design.',
  })

  head.meta.push({
    name: 'theme-color',
    content: '#FAB7AC',
  })

  head.meta.push({
    name: 'viewport',
    content:
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  })
}
