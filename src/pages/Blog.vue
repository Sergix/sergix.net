<template>
  <Layout>
    <main class="px-6 my-8 md:mt-24 mx-auto max-w-xl">
      <h1 class="text-5xl font-medium">BLOG</h1>
      <h2 class="mt-2 border-black border p-6">Minimal, because it's not Medium.</h2>

      <article
        class="mt-16 w-full flex flex-col lg:mt-32"
        v-for="{ node: { title, published, slug, content } } in $page.allPost
          .edges"
        :key="slug"
      >
        <header class="flex flex-row items-center">
          <h3 class="text-2xl font-medium flex-1">
            {{ title }}
          </h3>
          <span class="text-gray-500">{{ published }}</span>
        </header>

        <!-- grab the first paragraph -->
        <p class="mt-4 font-serif lg:mt-8" v-html="content.split('</p>')[0]" />

        <g-link
          class="btn btn-gradient-outline pt-button-fix mt-6 self-end md:mt-8 lg:mt-12"
          :to="`/blog/${slug}`"
        >
          CONTINUE READING
        </g-link>
      </article>

      <!-- pagination controls -->
      <nav class="mt-16 lg:mt-24">
        <h4 class="font-medium">
          Page {{ $page.allPost.pageInfo.currentPage }}
        </h4>
        <div class="mt-4 flex">
          <g-link
            class="btn rounded border-2 border-black text-sm"
            :to="previousPagePath"
            v-show="$page.allPost.pageInfo.currentPage > 1"
          >
            PREVIOUS PAGE
          </g-link>
          <g-link
            class="btn rounded border-2 border-black text-sm ml-auto"
            :to="nextPagePath"
            v-show="
              $page.allPost.pageInfo.currentPage <
                $page.allPost.pageInfo.totalPages
            "
          >
            NEXT PAGE
          </g-link>
        </div>
      </nav>
    </main>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        subtitle
        slug
        published
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'BlogPage',
  computed: {
    previousPagePath() {
      let previousPage = this.$page.allPost.pageInfo.currentPage - 1
      if (previousPage < 2) {
        return '/blog'
      } else {
        return `/blog/${previousPage}`
      }
    },
    nextPagePath() {
      return `/blog/${this.$page.allPost.pageInfo.currentPage + 1}`
    },
  },
  metaInfo() {
    return {
      title: 'blog',
    }
  },
}
</script>
