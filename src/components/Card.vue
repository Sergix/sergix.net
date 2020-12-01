<template>
<section class="max-w-lg mb-10 md:mb-6 border bg-white rounded-md flex flex-col hover:-translate-y-1 transform hover:shadow-lg transition-all duration-300 card">
  <div class="w-full h-32 md:h-48 bg-white">
    <g-image
      class="object-cover w-full h-full object-center md:object-top rounded-t-md"
      :src="src"
    />
  </div>
  <div class="p-6 md:p-10">
    <h2 class="text-3xl font-semibold leading-tight">{{ title }}</h2>
    <a :href="link" class="flex flex-row align-bottom mt-2 text-lg font-semibold text-primary" target="_blank">
      {{ link.replace('https://www.', '') }}
      <img class="ml-1 w-4" src="@/assets/image/icon/external-link.svg" />
    </a>
    <p class="mt-6"><slot/></p>
    <div class="w-full flex flex-col md:flex-row mt-4 text-sm">
      <p>{{ date }}</p>
      <p class="italic md:mt-0 md:ml-auto">{{ tags }}</p>
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
