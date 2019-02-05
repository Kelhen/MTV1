<template>
  <div>
    <Tweet
      v-for="tweet in tweets"
      :key="tweet"
      :msg="tweet"/>
  </div>
</template>


<script>
import Tweet from '../components/provide/Tweet.vue'

export default {
  name: 'Prop',
  components: {
    Tweet,
  },
  provide: {
    author: 'Elon'
  },
  data() {
    return {
      tweets: ['Hello word', 'my second tweet'],
    };
  }
}
</script>
