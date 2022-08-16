<template>
  <nav class="flex flex-col items-start">
    <button class="btn-largelink" @click.stop="$emit('click')">
      <a href="/websites">WEBSITES</a>
    </button>
    <button class="btn-largelink" @click.stop="$emit('click')">
      <a href="/designs">DESIGNS</a>
    </button>
    <button class="btn-largelink" @click.stop="$emit('click')">
      <a href="/blog">BLOG</a>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Links',
}
</script>