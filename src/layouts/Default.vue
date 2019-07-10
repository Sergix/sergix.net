<template lang="pug">
  div.layout
    Navbar
    transition(name="fade" appear)
      main
        slot
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
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
body {
  background-color: $light-color;
  color: $dark-color;
  font-family: TTHoves-Regular;
  font-weight: normal;
  font-style: normal;
  font-size: 14pt;
  line-height: 1.5;
  margin: 0;
  overflow-x: hidden;
}

main {
  max-width: 1488px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
