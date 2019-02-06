<template>
  <div>
    <p>{{newTweet}}</p>
    <textarea
      type="text-area"
      rows="5"
      max="280"
      placeholder="Tweet the words.. almost :P"
      v-model="newTweet"/>
    {{ total }} / 280
    <button @click="postTweet()">Tweet!</button>
  </div>
</template>

<script>
export default {
  name: 'v-model',
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