<template>
  <div>
    <p>{{newTweet}}</p>
    <input type="text-area" row="5" max="280" v-model="newTweet"> {{ total }} / 280
    <button @click="postTweet()">Tweet!</button>
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  data() {
    return {
      newTweet: '',
    };
  },
  methods: {
    postTweet() {
      this.$emit('postTweet', this.newTweet);
      this.newTweet = '';
    }
  },
  computed: {
    total () {
      return this.newTweet.length;
    }
  }
}
</script>