<template lang="pug">
    div.example
        p#message {{ message.text }}
        button(@click='content = !content')#toggle butt
</template>

<script>
export default {
  name: 'example',
  data: () => ({
    content: true,
  }),
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
}
</script>
