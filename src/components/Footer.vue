<template lang="pug">
	footer.footer
		p Designing and programming for all. By Peyton McGinnis.
</template>


<script>
export default {
  name: 'Footer',
}
</script>


<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: $accent-color;
  color: $light-color;
  display: flex;
  height: 6rem;
  justify-content: center;
  margin-left: 12.5%;
  width: 75%;

  p {
    margin: 0;
    font-family: TTHoves-Italic;
    font-size: 2vh;
    padding: 0 1rem 0 1rem;
    text-align: center;
  }
}

@media screen and (max-width: $responsive-sm) {
  .footer {
    height: 5rem;
    width: 100%;
    margin: 0;

    p {
      font-size: 0.8em;
    }
  }
}
</style>
