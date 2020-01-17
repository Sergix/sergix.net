<template lang="pug">
  Layout
    #container
      h1 GET A BURGER
      #burger-time {{ burger }}
      button.normal-button#burger-button(@click="newBurger") Burger Please
      #burger-list
        h3 Burger List
        #input-row(v-for="burgerItem in burgerChoices") {{ burgerItem }}
          button#delete(@click="deleteBurger(burgerItem)")
            span x
      #burger-form
        input#burger-input(placeholder="Add burger..." v-model="newBurgerInput")
        button.normal-button#add-burger-button(@click="addBurger") Add Burger
</template>

<script>
export default {
  metaInfo: {
    title: 'Burger time'
  },
  data() {
    return {
      burger: 'get a burger',
      burgerChoices: ["mac", "cheese", "five guys",],
      newBurgerInput: ''
    }
  },
  methods: {
    getBurgerName(choice) {
      return this.burgerChoices[choice] + "burger"
    },
    randomNumber(max) {
      return Math.floor(Math.random() * max)
    },
    newBurger(event) {
      this.burger = this.getBurgerName(this.randomNumber(this.burgerChoices.length))
    },
    addBurger(event) {
      this.burgerChoices.push(this.newBurgerInput)
    },
    deleteBurger(burgerItem) {
      const index = this.burgerChoices.indexOf(burgerItem)
      this.burgerChoices.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    margin-top: 2rem;
    text-align: center;
    font-style: italic;
  }

  #burger-time {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;
    background-color: #fc82cd;
    padding: 1rem;
  }

  button.normal-button {
    margin-top: 1rem;
    text-align: center;
    padding: 1rem;
    background-color: #44df66;
    border: none;
    border-radius: 7px;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
  }

  button.normal-button:active {
    animation: buttonPulse 0.1s;
  }

  #burger-button {
    font-size: 1.25rem;
  }

  #burger-form {
    margin-left: auto;
    margin-right: auto;
    #add-burger-button {
      padding: 0.5rem 1rem 0.5rem 1rem;
      margin-left: 1rem;
    }

    input {
      width: 15rem;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
      border: none;
      border-radius: 7px;
      background-color: #dbdbdb;
      padding-left: 0.5rem;
    }
  }

  #burger-list {
    margin-left: auto;
    margin-right: auto;
    list-style: none;

    h3 {
      margin-top: 4rem;
    }
  }

  #input-row {
    margin-left: auto;
    margin-right: auto;

    #delete {
      font-size: 0.7rem;
      margin-left: 2rem;
      color: #fff;
      background-color: #ff3737;
      border: 1px solid #ff3737;
      border-radius: 1000px;
      padding: 2px 10px 2px 10px;

      span {
        margin-bottom: 3px;
      }
    }
  }
}

@keyframes buttonPulse {
  0% {
    font-size: 1.25rem;
  }

  100% {
    font-size: 1.4rem;
  }
}
</style>
