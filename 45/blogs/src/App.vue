<template>
  <div>
    <h1>Bob Loblaw's Law Blogs</h1>
    <button @click="toggle">toggle</button>

    <section v-if="showForm">
      <h4>Create new blog post</h4>Author:
      <input type="text" v-model="authorName">
      <br>
      <textarea name id cols="30" rows="10" v-model="blogContent"></textarea>
      <br>
      <button @click="addPost">Submit</button>
    </section>

    <section v-else>
      <h4>View all blogs</h4>

      <post
        v-for="(post, i) in blogPosts"
        :key="i"
        :post="post"
        :remove="remove"
        :postIndex="i"
        @joeEvent="joeMethod"
      ></post>
    </section>
  </div>
</template>

<script>
import Post from "./components/Post";

export default {
  data() {
    return {
      showForm: true,
      authorName: "",
      blogContent: "",
      blogPosts: []
    };
  },
  methods: {
    joeMethod(data) {
      this.remove(data);
    },
    remove(i) {
      this.blogPosts = this.blogPosts.filter((post, index) => index !== i);
    },
    toggle() {
      this.showForm = !this.showForm;
    },
    addPost() {
      const newBlog = { author: this.authorName, blog: this.blogContent };
      this.blogPosts.push(newBlog);
      this.authorName = "";
      this.blogContent = "";
      this.toggle();
    }
  },
  components: {
    Post: Post
  }
};
</script>

<style>
</style>


