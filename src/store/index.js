import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const initialState = {
  token: "",
  searchResult: [],
  books: [],
  user: [],
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    deleteToken(state) {
      state.token = "";
    },
    setUser(state, user) {
      state.user = [];
      state.user.push(user);
    },
    setSearchResult(state, result) {
      state.searchResult = [];
      state.searchResult.push(result);
    },
  },
  computed: {
    getUser() {
      return this.store.state.user;
    },
    getSearchResult() {
      return this.store.state.searchResult;
    }
  },
  plugins: [createPersistedState()]
});