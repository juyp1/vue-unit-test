<template>
  <!-- input-test.vue -->
  <div>
    <p>{{ msg }}</p>
    <input type="text" v-model="input">
    <button @click="handle"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      input: 'hi'
    }
  },

  methods: {
    handle() {
      this.msg = this.input
    }
  }
}
</script>

