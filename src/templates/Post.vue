<template lang="pug">
  Layout
    div(v-html="$page.post.content")
</template>


<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>


<script>
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>
