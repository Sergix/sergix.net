<template>
  <Layout>
    <main class="px-6 my-8 md:mt-24">
      <h1 class="text-6xl font-medium leading-none">Page Not Found</h1>
      <p class="text-2xl mt-8 md:mt-16">You've lost your way.</p>
      <g-link class="border-b-2 border-primary text-2xl" to="/">
        Return home.
      </g-link>
    </main>
  </Layout>
</template>

<script>
export default {
  name: '404Page',
  metaInfo: {
    title: 'not found',
  },
}
</script>
