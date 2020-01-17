<template lang="pug">
  Layout
    .cover
      h1(v-parallax='0.2') Breaking the paradigm of design.
      figure.box
        img(src='@/assets/image/index-cover-graphic.svg'
          alt='Perspective Matters'
          v-parallax='0.1'
          v-responsive.lg.xl).cover-graphic
        //- img(src='@/assets/image/test.png' alt='Peyton McGinnis').portrait
    div.content
      section
        h2 Creating the uncreated.
        p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        div.links
          a(href='#') GitHub
          a(href='#') Behance
      section
        h2 Modeling the outcome.
        p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        div.links
          a(href='#') GitHub
          a(href='#') Behance
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
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  height: 100vh;
  margin-top: -5rem;
  margin-left: -20px;
  width: 100vw;
  z-index: -1;

  h1 {
    font-size: 10vh;
    width: 35%;
    margin-left: 10%;
  }

  .box {
    background-color: white;
    height: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: -1;

    .cover-graphic {
      margin-top: 8%;
      position: absolute;
      right: 10%;
      width: 40%;
      z-index: 0;
    }
  }
}

div.content {
  .links {
    padding: 0;

    a {
      color: $secondary-color;
      float: left;
      font-family: TTHoves-DemiBold, $font-stack-sans-serif;
      padding-right: 1rem;
      text-decoration: none;
    }
  }
}

@media screen and (orientation: portrait) {
  .cover-graphic {
    display: none;
  }
}

@media screen and (min-width: $responsive-lg) {
  div.content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5rem 0 5rem;

    section {
      width: 55%;
      padding: 5rem;

      p {
        margin-bottom: 2rem;
      }
    }

    section:nth-child(2n) {
      float: right;
    }
  }
}

@media screen and (max-width: $responsive-sm) {
  .cover .box {
    left: -50%;
    width: 150%;
  }
}

@media screen and (max-width: $responsive-xs) {
  .cover {
    width: auto;

    h1 {
      font-size: 7.5vh;
      padding-left: 0;
      width: 100%;
    }
  }
}
</style>
