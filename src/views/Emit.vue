<template>
  <div>
    <Tweet v-for="(tweet, index) in tweets" :key="index" :msg="tweet" @delete="deleteTweet(index)"/>
  </div>
</template>


<script>
import Tweet from '../components/emit/Tweet.vue'

export default {
  name: 'Prop',
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: ['Hello word', 'my second tweet'],
    };
  },
  methods : {
    deleteTweet(index) {
      this.$delete(this.tweets, index);
    }
  }
}
</script>

<style scoped>
</style>