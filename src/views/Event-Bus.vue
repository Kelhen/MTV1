<template>
  <div>
    <Tweet v-for="(tweet, index) in tweets" :key="index" :msg="tweet" :index="index"/>
  </div>
</template>


<script>
import EventBus from '../event-bus.js';
import Tweet from '../components/event-bus/Tweet.vue'

export default {
  name: 'Event-Bus',
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: ['Hello word', 'my second tweet'],
    };
  },
  created () {
    EventBus.$on('DELETE_TWEET', (payLoad) => {
      this.$delete(this.tweets, payLoad);
    });
  },
}
</script>
