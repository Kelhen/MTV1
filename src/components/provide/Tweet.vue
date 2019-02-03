<template>
  <div>{{ msg }} by {{ author }}</div>

</template>

<script>
export default {
  name: 'Tweet',
  props: {
    msg: String
  },
  inject: ['author'],
}
</script>

<style scoped>
</style>