<template>
  <div>
    <Tweet v-for="tweet in tweets" :key="tweet" :msg="tweet"/>
    <button @click="addTweet()"> add tweet </button>
    <button @click="countTweets()">count childs</button>
    <p>number of tweets : {{ childs }}</p>
  </div>
</template>


<script>
import Tweet from '../components/Tweet.vue'

export default {
  name: 'Children',
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: ['Hello word', 'my second tweet'],
      childs: 0,
    };
  },
  methods: {
    addTweet () {
      this.tweets.push('eee');
    },
    countTweets() {
      this.childs = this.$children.length;
    },
  },
}
</script>
