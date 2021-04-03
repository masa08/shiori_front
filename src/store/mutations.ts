import { State } from './state';

const mutations = {
  setToken(state: State, token: string) {
    state.token = token;
  },
  deleteToken(state: State) {
    state.token = '';
  },
  // TODO: userの型を定義する
  setUser(state: State, user: any) {
    state.user = user;
  },
  // TODO: resultの型を定義する
  setSearchResult(state: State, result: any) {
    state.searchResult.push(result);
  },
};

export default mutations;
