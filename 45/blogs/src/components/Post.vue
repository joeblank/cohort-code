<template>
  <div>
    <p>Author: {{post.author}}</p>
    <p>{{post.blog}}</p>
    <button @click="remove(postIndex)">Delete</button>
    <button @click="remove2">click me</button>
    <hr>
  </div>
</template>

<script>
export default {
  props: ["post", "remove", "postIndex"],
  methods: {
    remove2() {
      this.$emit("joeEvent", this.postIndex);
    }
  }
};
</script>

