<template>
  <Layout>
    <main class="mx-auto px-6 my-8 max-w-xl post lg:mt-24">
      <header class="flex flex-row items-center">
        <h1 class="text-2xl font-medium flex-1">
          {{ $page.post.title }}
        </h1>
        <span class="text-gray-500 text-sm">
          {{ timestamp }}
        </span>
      </header>
      <article class="mt-12 font-serif">
        <VueRemarkContent />
      </article>
    </main>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    slug
    published
  }
}
</page-query>

<script>
export default {
  name: 'Post',
  computed: {
    timestamp() {
      return this.$page.post.published
        .split(' ')
        .splice(1, 2)
        .join(' ')
    },
  },
  metaInfo() {
    return {
      title: this.$page.post.slug,
    }
  },
}
</script>

<style lang="sass">
/* purgecss start ignore */
.post
  h2
    @apply text-2xl
    @apply mt-16

  p
    @apply mt-4
    @apply leading-relaxed

@screen lg
  .post
    p
      @apply mt-6
      @apply leading-loose
/* purgecss end ignore */
</style>
