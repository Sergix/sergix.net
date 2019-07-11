<template lang="pug">
Layout
  .cover
    h1 Breaking the paradigm of design.
    figure.box

</template>


<script>
export default {
  metaInfo: {
    title: 'Home',
  },
}
</script>


<style lang="scss" scoped>
.cover {
  height: 100vh;
  left: 0;
  max-width: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  h1 {
    font-family: 'Playfair Display';
    font-size: 5rem;
    line-height: 1.2;
    margin-top: 40vh;
    width: 45%;
    padding-left: 10vw;
  }

  .box {
    background-color: white;
    height: 39em;
    top: 15%;
    position: absolute;
    right: -5%;
    transform: rotate(-4deg);
    width: 200%;
    z-index: -1;
  }
}
</style>
