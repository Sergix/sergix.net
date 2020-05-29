<template>
  <div class="h-screen flex flex-col max-w-lg-screen mx-auto">
    <Navbar class="lg:mt-4" />
    <div class="flex-1 flex flex-col">
      <transition name="fade" appear>
        <slot />
      </transition>
    </div>
    <Footer class="flex-0" v-show="!isIndexPage" />
  </div>
</template>

<script>
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    isIndexPage() {
      return this.$route.path === '/'
    },
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="sass">
body
  @apply overflow-x-hidden

.fade-enter-active
  transition: opacity 0.5s

.fade-enter
  opacity: 0
</style>
