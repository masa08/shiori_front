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
};

export default mutations;
