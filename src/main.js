// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// fonts
import 'typeface-playfair-display'
import '~/assets/fonts/TTHoves.css'

// directives/plugins

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
    content: 'Breaking the paradigm of design.',
  })

  head.meta.push({
    name: 'theme-color',
    content: '#FAB7AC',
  })
}
