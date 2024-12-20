<template>
  <Transition name="slide-fade">
    <div
      v-if="active"
      class="absolute bg-white left-0 top-0 w-screen flex flex-col px-6 z-10 h-screen menu"
    >
      <Links class="flex-1 mt-24" @click="$emit('close')" />
    </div>
  </Transition>
</template>

<script>
import Contact from '@components/Contact.vue'
import Links from '@components/Links.vue'

export default {
  name: 'NavMenu',
  props: {
    active: Boolean,
  },
  components: {
    Contact,
    Links,
  },
  beforeDestroy() {
    // component is unmounted on route change
    this.$emit('close')
  },
}
</script>

<style lang="sass">
.slide-fade-enter-active
  transition: all 0.1s ease-out

.slide-fade-leave-active
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1)

.slide-fade-enter-from,
.slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0
</style>
