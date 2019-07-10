<template lang="pug">
Layout
  h1 About us
  p Lorem ipsum dolor sit amet, consectetur adipisicing elit...
  ExampleComp(:message="test")
</template>

<script>
import ExampleComp from "~/components/ExampleComp.vue";

export default {
  data: () => ({
    test: {
      text: "message"
    }
  }),
  components: {
    ExampleComp
  },
  metaInfo: {
    title: "About us"
  }
};
</script>
