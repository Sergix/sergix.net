<template>
  <Layout>
    <main class="px-6 my-8 mx-auto md:w-2xl lg:w-4xl">
      <div class="flex flex-row items-center mt-8 md:mt-16">
        <h1 class="text-5xl font-medium flex-1">DESIGNS</h1>
        <g-image class="-mr-16 z-neg-1 -mb-8" src="@/assets/image/circle.svg" />
      </div>
      <h2 class="mt-2 border-black border p-6 mr-4 md:rounded-tr-full">A small collection of part of my web design and artwork.</h2>
      <section class="mt-16">
        <h2 class="text-xl">
          Websites and Web Applications
        </h2>
        <g-image
          class="max-w-64 mt-8 md:max-w-sm lg:max-w-lg lg:mt-16"
          src="@/assets/image/designs/sparkboard-macbook-mockup_compressed.jpg"
        />
        <g-image
          class="max-w-64 mt-4 ml-auto md:max-w-sm lg:max-w-lg lg:mt-32"
          src="@/assets/image/designs/workdrop-iphone-mockup_compressed.jpg"
        />
        <g-image
          class="max-w-48 mt-4 md:max-w-sm lg:max-w-lg lg:mt-32"
          src="@/assets/image/designs/bluetree-iphone-mockup_compressed.jpg"
        />
      </section>
      <section class="mt-20 lg:mt-64">
        <h2 class="text-xl">
          Artwork
        </h2>
        <p class="mt-4 leading-tight">
          Some of this artwork is available for purchase at Redbubble.
        </p>
        <a href="https://sergix7440.redbubble.com/">
          <button class="btn btn-gradient-outline mt-6 pt-2">
            OPEN SHOP
          </button>
        </a>
        <div class="artwork">
          <g-image
            src="@/assets/image/designs/something-different-hardcover-journal_compressed.jpg"
          />
          <g-image
            class="ml-auto"
            src="@/assets/image/designs/perspective-matters.png"
          />
          <g-image
            src="@/assets/image/designs/let-the-sky-fall-down-hardcover-journal_compressed.jpg"
          />
          <g-image
            class="ml-auto"
            src="@/assets/image/designs/new-horizons.png"
          />
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  name: 'DesignsPage',
  metaInfo: {
    title: 'designs',
  },
}
</script>

<style lang="sass" scoped>
.artwork > img
  @apply max-w-48
  @apply mt-8

@screen md
  .artwork > img
    @apply max-w-sm

@screen lg
  .artwork > img
    @apply max-w-lg mt-32

    &:first-child
      @apply mt-16
</style>
