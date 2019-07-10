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

</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 2vh 0 2vh;
  padding: 5vh;

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
    text-decoration: none;
    margin: 2rem;
  }
}
</style>
