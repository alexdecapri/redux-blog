import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };
// all = array of blog posts on IndexRoute
// post = single post

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return { ...state, all: action.payload.data }; // response from api
  default:
      return state;
  }
}
