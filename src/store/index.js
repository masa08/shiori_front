import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
  token: "",
  searchResult: [],
  books: [],
  user: [],
};

const mutations = {
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
}

const getters = {
  getUser(state) {
      return state.user;
    },
    getSearchResult(state) {
      return state.searchResult;
    }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins: [createPersistedState()]
});