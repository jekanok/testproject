<template>
  <div>
    <div class="wrapper">
      <h2>Записи пользователя:</h2>
      <div class="conteiner" v-for="(user, index) in users " :key="index">
        <h3>{{user.title}}</h3>
        <span>{{user.body}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch("getUsers", 2);
    return {
      users: store.getters.users
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