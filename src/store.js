import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: ['Hello word', 'my second tweet'],
  },
  mutations: {
    ADD_TWEET(state, tweet) {
      state.tweets.push(tweet);
    }
  },
  actions: {
    postTweet(context, tweet) {
      context.commit('ADD_TWEET', tweet);
    }
  }
})
