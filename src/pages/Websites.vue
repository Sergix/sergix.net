<template>
  <Layout>
    <main class="px-6 my-8 mx-auto">
      <div class="mt-8 md:p-8 md:mt-16">
        <h1 class="text-5xl font-medium md:pt-5 md:pb-4 px-2 py-2">WEBSITES</h1>
        <!-- <img
          class="-ml-12 -mt-20 relative z-neg-1"
          src="@/assets/image/circle.svg"
        /> -->
        <h2 class="mt-2 max-w-md border border-black p-6">All websites were built with modern, scalable, and open source web technologies.</h2>
      </div>

      <div class="md:grid grid-cols-2 grid-flow-row row-gap-4 mb-16 mt-24">
        <Card
          title="workdrop"
          link="https://www.workdrop.app"
          date="April 2020"
          tags="Vue, Nuxt, Netlify, MongoDB Atlas + Realm, AWS"
          img="websites/workdrop-mobile.png"
        >
          A file requesting app designed for teachers and educators.
        </Card>

        <Card
          title="BlueTree Landscaping"
          link="https://www.bluetreesc.com"
          date="March 2020"
          tags="Vue, Gridsome, Netlify, Storyblok"
          img="websites/bluetree-mobile.png"
        >
          A local landscaping company in Charleston, SC.
        </Card>

        <Card
          title="BlygoldSC"
          link="https://www.blygoldsc.com"
          date="August 2020"
          tags="Vue, Gridsome, Netlify"
          img="websites/blygold-mobile.png"
        >
          Custom HVAC corrosive-resistant coating for commercial distributors within the southeast region of the United States.
          A partner of <a class="font-medium hover:underline" href="https://www.blygold.com/">Blygold International BV</a>.
        </Card>
      </div>
    </main>
  </Layout>
</template>

<script>
import Card from '@/components/Card';

export default {
  components: {
    Card,
  },
  metaInfo() {
    return {
      title: 'websites',
    }
  },
}
</script>

<style lang="sass" scoped>
@screen md
  .card
    @apply mx-4
</style>
