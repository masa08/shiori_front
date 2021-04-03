import { State } from './state';

const getters = {
  getUser(state: State) {
    return state.user;
  },
  getSearchResult(state: State) {
    return state.searchResult;
  },
};

export default getters;
