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
    font-family: TTHoves-Italic;
    text-align: center;
  }
}
</style>
