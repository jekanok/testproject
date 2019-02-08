import Vuex, { Store } from "vuex";
import Axios from "axios";

const CreateStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      comments: [],
      users: [],
      user: [],
      id: 1
    },
    getters: {
      posts(state) {
        return state.posts;
      },
      comments(state) {
        return state.comments;
      },
      users(state) {
        return state.users;
      },
      user(state) {
        return state.user;
      },
      id(state) {
        return state.id;
      }
    },
    mutations: {
      getPosts(state, posts) {
        state.posts = posts;
      },
      getComment(state, comments) {
        state.comments = comments;
      },
      getUsers(state, users) {
        state.users = users;
      },
      getUser(state, user) {
        state.user = user;
      }
    },
    actions: {
      async getUser(context, id) {
        const req = await Axios.get(
          "https://jsonplaceholder.typicode.com/users/",
          {
            params: { id: id }
          }
        );
        context.commit("getUser", req.data);
      },
      async getPosts(context) {
        const req = await Axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        context.commit("getPosts", req.data);
      },

      async getComment(context, id) {
        const req = await Axios.get(
          "https://jsonplaceholder.typicode.com/comments?",
          { params: { postId: id } }
        );

        context.commit("getComment", req.data);
      },
      async getUsers(context, id) {
        const req = await Axios.get(
          "https://jsonplaceholder.typicode.com/posts?",
          { params: { userId: id } }
        );

        context.commit("getUsers", req.data);
      }
    }
  });
};
export default CreateStore;
