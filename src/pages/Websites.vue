<template>
  <Layout>
    <main class="px-6 my-8 md:w-2xl lg:w-4xl mx-auto">
      <h1 class="text-5xl font-medium md:mt-16">WEBSITES</h1>
      <img
        class="-ml-12 -mt-12 relative z-neg-1"
        src="@/assets/image/circle.svg"
      />

      <section class="w-3/4 mt-8 w-full mx-auto">
        <div class="flex flex-row items-center w-full">
          <img
            class="max-w-64 flex-0"
            src="@/assets/image/websites/workdrop-mobile.png"
          />
          <img
            class="mx-auto mb-auto mt-24 w-12 transform rotate-90"
            src="@/assets/image/arrow.svg"
          />
        </div>
        <div class="flex flex-row w-full mt-12">
          <h2 class="font-medium text-5xl flex-1 z">
            workdrop
          </h2>
          <img src="@/assets/image/dots.svg" />
        </div>
        <p class="mt-4 leading-tight">
          A file requesting app designed for teachers and educators.
        </p>
        <p class="text-sm mt-6">
          Vue, Nuxt, Netlify, MongoDB, AWS
        </p>
      </section>

      <section class="mt-24 flex flex-col w-full items-end text-right lg:mt-40">
        <img
          class="max-w-64"
          src="@/assets/image/websites/bluetree-mobile.png"
        />
        <h2 class="font-medium text-5xl leading-none mt-12">
          BlueTree Landscaping
        </h2>
        <p class="mt-4 leading-tight w-3/4">
          A local landscaping company in Charleston, South Carolina.
        </p>
        <p class="text-sm mt-6">Vue, Gridsome, Netlify, Sanity</p>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'websites',
    }
  },
}
</script>

<style lang="scss" scoped></style>
