<template>
  <div>{{ msg }} ({{ index + 1}}/{{ totalTweets }})
    <button @click="deleteTweet()">delete</button>
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    msg: String,
    index: Number
  },
  methods: {
    deleteTweet () {
      this.$delete(this.$parent.tweets, this.index);
    }
  },
  computed: {
    totalTweets () {
      return this.$parent.tweets.length;
    }
  }
}
</script>
