<template lang="pug">
  div.layout
    Navbar
    transition(name="fade" appear)
      main
        slot
    Footer
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
html,
body,
.layout {
  height: 100%;
}

body {
  background-color: $light-color;
  color: $dark-color;
  font-family: TTHoves-Regular, $font-stack-sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1em;
  line-height: 1.5;
  margin: 0;
  overflow-x: hidden;
}

main {
  display: flex;
  flex-direction: column;
  height: auto !important;
  height: 100%;
  // -6rem is for footer (see min-height below)
  // believe the -6rem has to do with the navbar
  margin: 0 auto;
  max-width: 1488px;
  // keep footer at bottom of page even when content does not fill
  // change the 6rem to the height of the footer
  // (88.7% = 13/15)
  min-height: calc(88.7% - 6rem);
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  font-family: 'Playfair Display', $font-stack-serif;
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.2;
}

h2 {
  font-family: TTHoves-Medium, $font-stack-sans-serif;
  font-size: 3rem;
}

p {
  // font-family: 'Playfair Display', $font-stack-serif;
  font-family: TTHoves-Regular, $font-stack-sans-serif;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

@media screen and (max-width: $responsive-sm) {
  main {
    max-width: 300px;
  }
}
</style>
