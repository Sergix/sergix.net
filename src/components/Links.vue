<template>
  <nav class="flex flex-col items-start">
    
    <a href="/websites">
      <button class="btn-largelink" @click.stop="$emit('click')">
        WEBSITES
        <img
          class="w-16 inline mb-2"
          src="/image/arrow-right.svg"
        />
      </button>
    </a>
    <a href="/designs">
      <button class="btn-largelink" @click.stop="$emit('click')">
        DESIGNS
        <img
          class="w-16 inline mb-2"
          src="/image/arrow-right.svg"
        />
      </button>
    </a>
    <a href="/blog">
      <button class="btn-largelink" @click.stop="$emit('click')">
        BLOG
        <img
          class="w-16 inline mb-2"
          src="/image/arrow-right.svg"
        />
      </button>
    </a>
    <a href="https://reversiblecomputing.info">
      <button class="btn-largelink" @click.stop="$emit('click')">
        PROJECT
        <img
          class="w-16 inline mb-2"
          src="/image/arrow-right.svg"
        />
      </button>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Links',
}
</script>