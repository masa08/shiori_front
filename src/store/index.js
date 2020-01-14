import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const initialState = {
  token: "",
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    deleteToken(state) {
      state.token = "";
    }
  },
  plugins: [createPersistedState()]
});