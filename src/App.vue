<template>
  <div id="app">
    <img src="./assets/logo.png">
    <api-test></api-test>
  </div>
</template>

<script>
import ApiTest from '@/components/mock-test.vue'

export default {
  name: 'app',

  components: {
    ApiTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
