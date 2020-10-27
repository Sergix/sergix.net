<template>
<section class="max-w-xl mb-6 border bg-white rounded-md flex flex-col hover:-translate-y-1 transform hover:shadow-lg transition-all duration-300 card">
  <div class="w-full bg-white cover-image-container">
    <g-image
      class="object-cover w-full h-full object-top rounded-t-md"
      :src="src"
    />
  </div>
  <div class="p-8 md:p-10">
    <h2 class="text-4xl font-semibold leading-tight">{{ title }}</h2>
    <a :href="link" class="flex flex-row align-bottom mt-4 text-lg font-semibold text-primary" target="_blank">
      {{ link }}
      <img class="ml-1 w-4" src="@/assets/image/icon/external-link.svg" />
    </a>
    <p class="mt-6 text-xl"><slot/></p>
    <div class="w-full flex flex-col md:flex-row mt-6 text-sm">
      <p>{{ date }}</p>
      <p class="mt-2 italic md:mt-0 md:ml-auto">{{ tags }}</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name: "Card",
    props: ["title", "link", "desc", "date", "tags", "img"],
    computed: {
        src() {
            return require('@/assets/image/' + this.img)
        }
    }
}
</script>

<style scoped lang="sass">
.cover-image-container
    height: 16rem;
</style>