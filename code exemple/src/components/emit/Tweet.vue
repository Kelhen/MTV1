<template>
  <div>{{ msg }}
    <button @click="deleteTweet()">delete</button>
  </div>
</template>

<script>
export default {
  name: 'emit-child',
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
