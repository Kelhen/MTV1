<template>
  <div>{{ msg }}<button @click="deleteTweet()">delete</button></div>
</template>

<script>
import EventBus from '../../event-bus.js';

export default {
  name: 'Tweet',
  props: {
    msg: String,
    index: Number
  },
  methods: {
    deleteTweet() {
       EventBus.$emit('DELETE_TWEET', this.index);
    }
  }
}
</script>
