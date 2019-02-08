<template>
  <div>
    <Tweet
      v-for="tweet in tweets"
      :key="tweet"
      :msg="tweet"/> <!--:msg is the Prop -->
  </div>
</template>

<script>
import Tweet from '../components/prop/Tweet.vue'

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
