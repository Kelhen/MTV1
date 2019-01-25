<template>
  <div>
    <Tweet v-for="tweet in tweets" :key="tweet" :msg="tweet"/>
  </div>
</template>


<script>
import Tweet from '../components/Tweet.vue'

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

<style scoped>
</style>