<template>
  <nav class="flex flex-col items-start">
    <button class="gradient-primary hover:gradient-primary-soft active:gradient-primary-reversed" @click.stop="$emit('click')">
      <a href="/websites">WEBSITES</a>
    </button>
    <button class="gradient-primary hover:gradient-primary-soft active:gradient-primary-reversed" @click.stop="$emit('click')">
      <a href="/designs">DESIGNS</a>
    </button>
    <button class="gradient-primary hover:gradient-primary-soft active:gradient-primary-reversed" @click.stop="$emit('click')">
      <a href="/blog">BLOG</a>
    </button>
  </nav>
</template>

<style lang="sass" scoped>
nav > button
  @apply font-medium leading-none
  @apply mt-4
  @apply px-3 pt-2 pb-1
  @apply text-black text-5xl
  @apply rounded-lg
  @apply shadow-md
</style>
