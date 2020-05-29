<template>
  <nav class="flex flex-col items-start">
    <button @click.stop="$emit('click')">
      <g-link to="/websites">WEBSITES</g-link>
    </button>
    <button @click.stop="$emit('click')">
      <g-link to="/designs">DESIGNS</g-link>
    </button>
    <button @click.stop="$emit('click')">
      <g-link to="/blog">BLOG</g-link>
    </button>
  </nav>
</template>

<style lang="sass" scoped>
nav > button
  @apply font-medium
  @apply leading-none
  @apply gradient-primary
  @apply mt-4
  @apply px-3
  @apply pt-2
  @apply pb-1
  @apply rounded-lg
  @apply text-black
  @apply text-5xl
</style>
