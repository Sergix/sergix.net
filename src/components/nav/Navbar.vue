<template>
  <nav class="flex flex-row flex-shrink-0 h-24 items-center">
    <MobileMenu :active="menuButtonActive" @close="closeMenu" />
    <a class="logo" v-show="!menuButtonActive" href="/">
      <img class="w-48 ml-2 pb-2" src="/image/logo/sergix.svg" />
    </a>
    <ul
      class="hidden md:flex flex-row mt-1 flex-1 items-center ml-8"
      v-show="!noNav"
    >
      <li>
        <a href="/websites">WEBSITES</a>
      </li>
      <li>
        <a href="/designs">DESIGNS</a>
      </li>
      <li>
        <a href="/blog">BLOG</a>
      </li>
    </ul>
    <div class="z-20 ml-auto mr-6 nav-button-wrapper md:hidden">
      <button
        class="btn btn-gradient-outline pt-button-fix "
        :class="{ hidden: noNav }"
        @click="toggleMenu"
      >
        {{ menuButtonActive ? 'CLOSE MENU' : 'MENU' }}
      </button>
    </div>
  </nav>
</template>

<script>
import MobileMenu from '@components/nav/MobileMenu.vue'

export default {
  name: 'Navbar',
  components: {
    MobileMenu,
  },
  props: {
    noNav: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      menuButtonActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuButtonActive = !this.menuButtonActive
      this.toggleBodyOverflow()
    },
    toggleBodyOverflow() {
      window.scrollTo(0, 0)
      const el = document.body
      const className = 'overflow-hidden'
      this.menuButtonActive
        ? el.classList.add(className)
        : el.classList.remove(className)
    },
    closeMenu() {
      if (this.menuButtonActive) this.toggleBodyOverflow()
      this.menuButtonActive = false
    },
  },
  mounted() {
    window.onresize = () => {
      this.closeMenu()
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  transition: display 0.5s ease-in
  margin-top: .85rem

ul > li
  @apply px-12

  & > a
    &::after
      content: ''
      height: 2px
      transition: width 0.2s
      transition-delay: 0.1s
      @apply w-0
      @apply mx-auto
      @apply block
      @apply bg-primary

    &.active--exact::after
      @apply w-full

    &:hover::after
      @apply w-1/2
</style>
