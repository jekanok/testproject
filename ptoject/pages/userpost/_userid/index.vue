<template>
  <div>
    <div class="wrapper">
      <h2>Записи пользователя: {{user[0].username}}</h2>
      <div class="conteiner" v-for="(user, index) in users " :key="index">
        <h3>{{user.title}}</h3>
        <span>{{user.body}}</span>
      </div>
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