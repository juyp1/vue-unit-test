<template>
  <!-- mock-test.vue -->
  <p>{{ msg }}</p>
</template>

<script>
import getGreeting from '@/provider/index'

export default {
  data() {
    return {
      msg: 'waiting'
    }
  },

  created() {
    this.getMsg()
  },

  methods: {
    async getMsg(url) {
      try {
        const data = await getGreeting(url)

        this.msg = data.greeting
      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>

