<template>
  <div>
    <h2 class="ui-title-4">Посты пользователя: {{user[0].username}}</h2>
    <div v-for="(user, index) in users " :key="index">
      <NuxtLink :to="{ path: '/posts/'+ user.id, query: { userId: user.userId }}">
        <h3 class="ui-title-3">{{user.title}}</h3>
      </NuxtLink>
      <p class="ui-text-regular">{{user.body}}</p>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch("getUsers", params.userid);
    await store.dispatch("getUser", params.userid);
    return {
      users: store.getters.users,
      user: store.getters.user
    };
  }
};
</script>

<style scoped>
.ui-title-4,
.ui-title-3 {
  color: cadetblue;
  text-transform: uppercase;
}
.ui-text-regular {
  border-bottom: 1px solid #cccc;
  padding: 10px 0;
}
</style>
