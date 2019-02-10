<template>
  <div>
    <div class="post" v-for="post in posts " :key="post.id">
      <NuxtLink :to="{ path: '/posts/'+ post.id, query: { userId: post.userId }}">
        <h2 class="ui-title-4">{{post.title}}</h2>
      </NuxtLink>
      <p class="ui-text-regular">{{post.body}}</p>
      <NuxtLink :to="{ path: '/userpost/'+post.userId }">
        <span>{{ user[post.userId -1].username }}</span>
      </NuxtLink>
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
  created: function() {}
};
</script>

<style scoped>
.ui-title-4 {
  color: cadetblue;
  text-transform: uppercase;
}
</style>
