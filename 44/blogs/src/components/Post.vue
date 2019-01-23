<template>
  <div>
    <p>Author: {{post.author}}</p>
    <p>{{post.blogPost}}</p>
    <button @click="deletePost(index)">Delete</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post", "deletePost", "index"]
};
</script>

