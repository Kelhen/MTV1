<template>
  <div>
    <Tweet v-for="tweet in $store.state.tweets" :key="tweet" :msg="tweet"/>
    <input type="text" v-model="newTweet"> <button @click="postTweet">submit</button>
  </div>
</template>


<script>
import Tweet from '../components/Tweet.vue'

export default {
  name: 'Vuex',
  components: {
    Tweet,
  },
  data() {
    return {
      newTweet: '',
    };
  },
  methods: {
    postTweet() {
      this.$store.dispatch('postTweet', this.newTweet);
      this.newTweet = '';
    }
  }
}
</script>
