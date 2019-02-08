<template>
  <div>{{ msg }} by {{ author }}</div>

</template>

<script>
export default {
  name: 'provide-child',
  props: {
    msg: String
  },
  inject: ['author'],
}
</script>
