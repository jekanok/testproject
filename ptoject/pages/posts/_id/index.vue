<template>
  <div>
    <div class="wrapper">
      <div class="blog_post" v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>Автор:
      <NuxtLink :to="{ path: '/userpost/'+post.userId }">
        <b>{{ user[0].username }}</b>
      </NuxtLink>
      <div class="comments">
        <h2>Комментарии: ({{comments.length}})</h2>

        <div class="comment_item" v-for="(comment, index) in comments" :key="index">
          <h3>{{comment.name}}</h3>
          <span>{{comment.email}}</span>
          <p>{{comment.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Store, mapGetters } from "vuex";

export default {
  async asyncData({ store, params, query }) {
    await store.dispatch("getPosts");
    await store.dispatch("getUser", query.userId);
    await store.dispatch("getComment", params.id);
    return {
      post: store.getters.posts,
      comments: store.getters.comments,
      user: store.getters.user,
      post_userID: store.getters.id
    };
  },

  created: function() {
    let postId = this.$route.params.id;
    this.post = this.post[postId - 1];
    var post_userID = this.post.userId;

    console.log(this.post.userId);
  }
};
</script>

<style scoped>
.blog_post h2 {
  font-size: 32px;
}
.comments h2 {
  padding: 25px 0px;
}
.wrapper {
  width: 900px;
  margin: auto;
}
.conteiner {
  padding: 10px;
  border-bottom: 1px solid #cccc;
}
.conteiner a,
h2 {
  text-decoration: none;
  color: cadetblue;
  font-weight: 300;
}
.comment_item {
  margin-bottom: 10px;
  padding: 10px 0px;
  border-bottom: 1px solid #cccc;
}
</style>