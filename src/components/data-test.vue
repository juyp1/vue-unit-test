<template>
  <span>{{ msg }}</span>
</template>

<script>
export default {
  name: 'TestData',

  data() {
    return {
      msg: 'hello'
    }
  },
  
  created() {
    this.msg = 'bye'
  }
}
</script>
