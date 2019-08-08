<template lang="pug">
nav.navbar
  g-link(to='/')
    img(src='@/assets/image/logo/sergix-box-logo.svg'
      alt='Sergix').nav_logo
  li.nav_link_list
    g-link.nav_link(to='/about') ABOUT
    g-link.nav_link(to='/design') DESIGN
    g-link.nav_link(to='/projects') PROJECTS
    g-link.nav_link(to='/mode') MODE
    a.nav_link(href='https://github.com/sergix') GITHUB
  button(type='button' aria-label='Menu' aria-controles='navigation'
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
  display: flex;
  height: 4rem;
  justify-content: space-between;
  margin: 0 2vh 0 2vh;
  padding: 5vh 5vh 0 5vh;
  z-index: 1;

  .nav_logo {
    float: left;
    width: 6.5vh;
  }

  .nav_link_list {
    float: right;
    list-style: none;
  }

  .nav_link {
    color: $dark-color;
    font-size: 1rem;
    margin: 2rem;
    text-decoration: none;
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

@media screen and (orientation: landscape) {
  .nav_link_list {
    display: initial;
  }

  .menu-icon {
    display: none;
  }
}

@media screen and (max-width: $responsive-sm) {
  .navbar {
    margin: 0;
    padding: 2vh 5vh 0 5vh;
  }
}
</style>
