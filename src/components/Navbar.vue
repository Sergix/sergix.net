<template lang="pug">
nav.navbar
  g-link(to='/')
    img(src='@/assets/image/logo/sergix-logo.svg'
      alt='Sergix').nav_logo
  .nav_link_list
    g-link.nav_link(to='/about') ABOUT
    g-link.nav_link(to='/design') DESIGN
    g-link.nav_link(to='/projects') PROJECTS
    g-link.nav_link(to='/mode') MODE
    a.nav_link(href='https://github.com/sergix') GITHUB
  button(
    type='button'
    aria-label='Menu'
    aria-controls='navigation'
    v-bind:class='{ "is-active": menuButtonActive }'
    v-on:click='menuButtonActive = !menuButtonActive').menu-icon.hamburger.hamburger--minus
    span.hamburger-box
      span.hamburger-inner
  NavMenu(:active="menuButtonActive")
</template>

<script>
import NavMenu from '@/components/NavMenu'

export default {
  name: 'Navbar',
  components: {
    NavMenu,
  },
  data: () => ({
    menuButtonActive: false,
  }),
}
</script>

<style lang="scss" scoped>
.navbar {
  align-items: center;
  background-color: $light-color;
  display: flex;
  justify-content: space-between;
  padding: 2vh;
  z-index: 1;

  .nav_logo {
    float: left;
    width: 10em;
  }

  .nav_link_list {
    float: right;
  }

  .nav_link {
    color: $dark-color;
    font-size: 1rem;
    margin: 2rem;
    text-decoration: none;
    padding: 0.5rem;
  }

  .menu-icon {
    margin-right: -1rem;
    z-index: 1000;
  }
}

@media screen and (orientation: portrait) {
  .nav_link_list {
    display: none;
  }

  .menu-icon {
    display: initial;
  }
}

@media screen and (orientation: landscape) and (min-width: $responsive-sm) {
  .nav_link_list {
    display: initial;
  }

  .menu-icon {
    display: none;
  }
}

@media screen and (orientation: landscape) and (max-width: $responsive-sm) {
  .nav_link_list {
    display: none;
  }

  .menu-icon {
    display: initial;
  }
}

@media screen and (max-width: $responsive-sm) {
  .navbar {
    margin: 0;
    padding: 2vh 5vh 2vh 5vh;
  }
}
</style>
