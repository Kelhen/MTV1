<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'prop-child',
  props: {
    msg: String
  }
}
</script>
