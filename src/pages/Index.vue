<template>
  <Layout>
    <main class="mx-6 flex-1 flex flex-col">
      <Links class="links mt-4 lg:mt-16" />
      <Contact class="mt-auto mb-8 lg:mb-16" />

      <ClientOnly>
        <AnimatedCanvas
          class="large-illustration fixed hidden z-neg-1 md:inline"
        />
      </ClientOnly>

      <!-- right sidebar -->
      <aside
        class="h-screen flex flex-col ml-auto mr-4 absolute right-0 top-0 z-neg-1 py-8 lg:py-16"
      >
        <span>MINIMUM COMPOSITION</span>
        <span class="flex-1 relative">
          <span class="h-full inline-block text-center pt-8">
            CREATIVE ASSEMBLY
          </span>
        </span>
        <figure class="text-5xl font-medium mb-8 md:text-6xl">ALT7440</figure>
        <span>OPEN SOURCE</span>
        <img
          class="absolute mb-8 mr-8 right-0 bottom-0 w-12 lg:mb-16"
          src="@/assets/image/arrow.svg"
        />
      </aside>
    </main>
  </Layout>
</template>

<script>
import Contact from '@/components/Contact'
import Links from '@/components/Links'
import AnimatedCanvas from '@/components/AnimatedCanvas'

export default {
  name: 'IndexPage',
  components: {
    Contact,
    Links,
    AnimatedCanvas,
  },
  metaInfo: {
    title: '',
  },
}
</script>

<style lang="sass" scoped>
.large-illustration
  top: 0
  left: 0
  right: 0
  bottom: 0
  margin: auto

@screen lg
  ::v-deep .links > button
    @apply text-6xl

aside
  figure
    margin-right: -.55em

  span
    @apply text-xs
    @apply ml-auto
    writing-mode: vertical-rl

main
  height: -webkit-fill-available
</style>
