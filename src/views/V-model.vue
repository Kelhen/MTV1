<template>
  <div>
    <Tweet v-for="tweet in tweets" :key="tweet" :msg="tweet"/>
    <new-tweet @postTweet="postTweet"/>
  </div>
</template>


<script>
import Tweet from '../components/Tweet.vue'
import NewTweet from '../components/v-model/NewTweet.vue'

export default {
  name: 'Prop',
  components: {
    Tweet,
    NewTweet
  },
  data() {
    return {
      tweets: ['Hello word', 'my second tweet'],
    };
  },
  methods: {
    postTweet(newTweet) {
      this.tweets.push(newTweet)
    },
  }
}
</script>
