import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const initialState = {
  token: "",
  searchResult: [],
  books: [],
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
    setSearchResult(state, result) {
      state.searchResult = [];
      state.searchResult.push(result);
    },
    getSearchResult(state) {
      return state.searchResult[0]
    }
  },
  plugins: [createPersistedState()]
});