<template>
  <div>
    <div class="wrapper">
      <div class="conteiner" v-for="post in posts " :key="post.id">
        <NuxtLink :to="{ path: '/posts/'+ post.id, query: { userId: post.userId }}">
          <h2>{{post.title}}</h2>
        </NuxtLink>
        <p>{{post.body}}</p>
        <!-- <NuxtLink :to="{ path: '/userpost/'+post.userId }">
          <span v-if="user[post.id">{{user[0].username}}</span>
        </NuxtLink>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch("getPosts");
    await store.dispatch("getUser");
    return {
      posts: store.getters.posts,
      user: store.getters.user
    };
  },
  created: function() {
    console.log(1);
  }
};
</script>

<style scoped>
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
</style>