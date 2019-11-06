<template lang="pug">
transition(name='slide-fade')
  .navmenu(v-if='active')
    .nav_link_list
      g-link.nav_link(to='/about') ABOUT
      g-link.nav_link(to='/design') DESIGN
      g-link.nav_link(to='/projects') PROJECTS
      g-link.nav_link(to='/mode') MODE
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    active: Boolean,
  },
  watch: {
    active() {
      if (this.active) {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'
      } else if (!this.active) {
        document.body.style.overflowY = 'initial'
      } else {
        console.error('Something has gone horribly wrong.')
      }
    },
  },
}
</script>


<style lang="scss" scoped>
.navmenu {
  background: $dark-color;
  float: right;
  font-family: TTHoves-Medium, $font-stack-sans-serif;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  .nav_link_list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 1rem 1rem .5rem 1rem;

    .nav_link {
      color: $light-color;
      font-size: 15vw;
      text-decoration: none;
      text-justify: right;
      margin: 0.2rem;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
