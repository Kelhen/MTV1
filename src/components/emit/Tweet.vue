<template>
  <div>test: {{ msg }} <button @click="deleteTweet()">delete</button></div>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    msg: String
  },
  methods: {
    deleteTweet() {
      this.$emit('delete');
    }
  }
}
</script>
