<template>
  <Layout>
    <main class="mx-auto px-6 m-8 max-w-xl post lg:mt-24">
      <header class="flex flex-row items-center">
        <h1 class="text-2xl font-medium flex-1">
          {{ $page.post.title }}
        </h1>
        <span class="text-gray-500 text-sm">
          {{ timestamp }}
        </span>
      </header>
      <!-- <PostTools /> -->
      <article class="mt-12 font-serif" v-html="$page.post.content" />
    </main>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    slug
    published
    content
  }
}
</page-query>

<script>
// import PostTools from '@/components/PostTools.vue'

export default {
  name: 'Post',
  components: {
    // PostTools
  },
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
      title: this.$page.post.title,
    }
  },
}
</script>

<style lang="sass">
/* purgecss start ignore */

.post
  h2
    @apply text-2xl mt-16

  p
    @apply mt-4 leading-relaxed

  ol, ul
    @apply ml-10 mt-4
  
  ol
    @apply list-decimal

  ul
    @apply list-disc

@screen lg
  .post
    p
      @apply mt-6 leading-loose

/* purgecss end ignore */
</style>
