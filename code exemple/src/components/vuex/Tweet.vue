<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'vuex-child',
  props: {
    msg: String
  }
}
</script>