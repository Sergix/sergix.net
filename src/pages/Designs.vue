<template>
  <Layout>
    <main class="px-6 mt-8 mx-auto md:w-2xl lg:w-4xl">
      <div class="flex flex-row items-center md:mt-16">
        <h1 class="text-5xl font-medium flex-1">DESIGNS</h1>
        <g-image class="-mr-12" src="@/assets/image/circle.svg" />
      </div>
      <section class="mt-16">
        <h2 class="text-xl">
          Websites and Web Applications
        </h2>
        <g-image
          class="max-w-64 mt-8 md:max-w-sm lg:max-w-lg lg:mt-16"
          src="@/assets/image/designs/sparkboard-macbook-mockup_compressed.jpg"
        />
        <g-image
          class="max-w-64 mt-16 ml-auto md:max-w-sm  lg:max-w-lg lg:mt-32"
          src="@/assets/image/designs/workdrop-iphone-mockup_compressed.jpg"
        />
        <g-image
          class="max-w-64 mt-16 md:max-w-sm  lg:max-w-lg lg:mt-32"
          src="@/assets/image/designs/bluetree-iphone-mockup_compressed.jpg"
        />
      </section>
      <section class="mt-32 lg:mt-64">
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

<style lang="scss" scoped>
.artwork > img {
  @apply max-w-64 mt-16;

  &:first-child {
    @apply mt-8;
  }
}

@screen md {
  .artwork > img {
    @apply max-w-sm;
  }
}

@screen lg {
  .artwork > img {
    @apply max-w-lg mt-32;

    &:first-child {
      @apply mt-16;
    }
  }
}
</style>
