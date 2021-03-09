const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  deleteToken(state) {
    state.token = "";
  },
  setUser(state, user) {
    state.user = user;
  },
  setSearchResult(state, result) {
    state.searchResult.push(result);
  },
};

export default mutations;
