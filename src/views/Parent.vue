<template>
  <div>
    <Tweet v-for="(tweet, index) in tweets" :key="tweet" :msg="tweet" :index="index"/>
  </div>
</template>


<script>
import Tweet from '../components/parent/Tweet.vue'

export default {
  name: 'Prop',
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: ['Hello word', 'my second tweet'],
    };
  }
}
</script>
