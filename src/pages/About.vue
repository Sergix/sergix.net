<template lang="pug">
  Layout
    section.desc
      h1 About
    div.content
      section.content
        h2 Programmer
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu urna, mollis eu metus sed, fringilla maximus nunc. Cras rhoncus, ex et blandit mollis, augue metus euismod nibh, ac finibus ex risus quis lacus. Morbi sollicitudin ultrices leo tempor suscipit. Proin imperdiet ultricies nunc ac tristique. Sed blandit, mi a pharetra porttitor, felis massa ornare elit, a tincidunt arcu lectus quis sem. Pellentesque aliquet sem at dui dapibus, ut gravida risus viverra. Proin sed justo sodales, imperdiet quam imperdiet, cursus lorem. Mauris porta magna nisl, at venenatis felis egestas non.
      section.content
        h2 Designer
        p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu urna, mollis eu metus sed, fringilla maximus nunc. Cras rhoncus, ex et blandit mollis, augue metus euismod nibh, ac finibus ex risus quis lacus. Morbi sollicitudin ultrices leo tempor suscipit. Proin imperdiet ultricies nunc ac tristique. Sed blandit, mi a pharetra porttitor, felis massa ornare elit, a tincidunt arcu lectus quis sem. Pellentesque aliquet sem at dui dapibus, ut gravida risus viverra. Proin sed justo sodales, imperdiet quam imperdiet, cursus lorem. Mauris porta magna nisl, at venenatis felis egestas non.
</template>

<script>
export default {
  metaInfo: {
    title: 'About us',
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/section.scss';

section.desc {
  // background-color: $accent-color;
  color: $dark-color;
  padding-top: 5%;
  text-align: left;
  margin-left: 30%;

  h1 {
    font-size: 5rem;
  }
}

section.content {
  margin: 0 auto;
  width: 60%;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  &:not(:last-child) {
    margin-bottom: 5rem;
  }
}

@media screen and (orientation: portrait) {
  section.card {
    margin-left: 0;
    margin-right: 0;
    padding: 2em;
    width: 100%;
  }

  section.content {
    width: 100%;
  }
}
</style>
