<template>
  <div><input type="text-area" row="5" max="280"> {{ total }} / 280 <button @click="save()">Tweet!</button></div>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    newTweet: String
  },
  methods: {
    save() {
      this.$emit('value', this.newTweet);
    }
  },
  computed: {
    total () {
      return this.newTweet.length;
    }
  }
}
</script>
