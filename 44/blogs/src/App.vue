<template>
  <div id="app">
    <h1>Bob Loblaw's Law Blogs</h1>
    <button @click="toggle">
      <span v-if="showForm">Show Posts</span>
      <span v-else>Show Form</span>
    </button>
    <section v-if="showForm">
      <h4>Create new post:</h4>

      <p>
        Author:
        <input type="text" v-model="author">
      </p>
      <p>
        <textarea name id cols="30" rows="10" v-model="post"></textarea>
      </p>
      <button @click="addPost">Add Post</button>
    </section>

    <section v-else>
      <h4>All posts:</h4>
      <Post
        v-for="(post, i) in allPosts"
        :key="i"
        :post="post"
        :index="i"
        :deletePost="deletePost"
      />
    </section>
  </div>
</template>

<script>
import Post from "./components/Post";

export default {
  name: "App",
  data: function() {
    return {
      showForm: true,
      author: "",
      post: "",
      allPosts: []
    };
  },
  methods: {
    toggle: function() {
      this.showForm = !this.showForm;
    },
    addPost() {
      this.allPosts.push({
        author: this.author,
        blogPost: this.post
      });
      this.author = "";
      this.post = "";
      this.toggle();
    },
    deletePost(index) {
      this.allPosts = this.allPosts.filter((post, i) => i !== index);
    }
  },
  components: {
    Post: Post
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
