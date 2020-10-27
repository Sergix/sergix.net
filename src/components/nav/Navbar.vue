<template>
  <nav class="flex flex-row flex-shrink-0 h-24 items-center">
    <MobileMenu :active="menuButtonActive" @close="closeMenu" />
    <g-link class="logo" v-show="!menuButtonActive" to="/">
      <img class="w-48 ml-2 pb-2" src="@/assets/image/logo/sergix.svg" />
    </g-link>
    <ul
      class="hidden md:flex flex-row mt-1 flex-1 items-center ml-8"
      v-show="!isIndexPage"
    >
      <li>
        <g-link to="/websites">WEBSITES</g-link>
      </li>
      <li>
        <g-link to="/designs">DESIGNS</g-link>
      </li>
      <li>
        <g-link to="/blog">BLOG</g-link>
      </li>
    </ul>
    <button
      class="btn btn-gradient-outline ml-auto mr-6 pt-button-fix md:hidden"
      :class="{ hidden: isIndexPage }"
      @click="toggleMenu"
    >
      {{ menuButtonActive ? 'CLOSE MENU' : 'MENU' }}
    </button>
  </nav>
</template>

<script>
import MobileMenu from '@/components/nav/MobileMenu'

export default {
  name: 'Navbar',
  components: {
    MobileMenu,
  },
  data() {
    return {
      menuButtonActive: false,
    }
  },
  computed: {
    isIndexPage() {
      return this.$route.path === '/'
    },
  },
  methods: {
    toggleMenu() {
      this.menuButtonActive = !this.menuButtonActive
      this.toggleBodyOverflow()
    },
    toggleBodyOverflow() {
      // no ssr
      if (process.isClient) {
        window.scrollTo(0, 0)
        const el = document.body
        const className = 'overflow-hidden'
        this.menuButtonActive
          ? el.classList.add(className)
          : el.classList.remove(className)
      }
    },
    closeMenu() {
      this.menuButtonActive = false
      this.toggleBodyOverflow()
    },
  },
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
