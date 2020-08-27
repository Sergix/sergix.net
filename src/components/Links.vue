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
  @apply gradient-primary
  @apply font-medium leading-none
  @apply mt-4
  @apply px-3 pt-2 pb-1
  @apply text-black text-5xl
  //@apply border-2 border-gray-300
  @apply rounded-lg
  @apply shadow-md

  &:hover
    @apply gradient-primary-soft

  &:active
    @apply gradient-primary-reversed
</style>
