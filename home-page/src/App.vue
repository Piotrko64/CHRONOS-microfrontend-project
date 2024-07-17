<template>
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

html, body {
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family:'Lato', sans-serif;
}

#app {
  height: 100%;
}
</style>
