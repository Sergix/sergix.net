<template lang="pug">
    div.example
        p {{message.text}}
</template>

<script>
export default {
  name: "example",
  props: {
    message: {
      type: Object,
      required: true
    }
  }
};
</script>
