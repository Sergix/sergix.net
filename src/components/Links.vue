<template>
  <nav class="flex flex-col items-start">
    <button class="btn-largelink" @click.stop="$emit('click')">
      <a href="/websites">WEBSITES</a>
      <img
        class="w-16 inline mb-2"
        src="/image/arrow-right.svg"
      />
    </button>
    <button class="btn-largelink" @click.stop="$emit('click')">
      <a href="/designs">DESIGNS</a>
      <img
        class="w-16 inline mb-2"
        src="/image/arrow-right.svg"
      />
    </button>
    <button class="btn-largelink" @click.stop="$emit('click')">
      <a href="/blog">BLOG</a>
      <img
        class="w-16 inline mb-2"
        src="/image/arrow-right.svg"
      />
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Links',
}
</script>