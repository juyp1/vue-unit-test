<template>
  <div>
    <p>现在是{{ num }}</p>
    <button @click="increase">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },

  methods: {
    increase() {
      this.num++
    }
  }
}
</script>

