import { set_recent_posts, set_results_posts } from "../actions/types";

const init_state = {
  resultsPosts: [],
  recentPosts: []
};

export default function(state = init_state, action) {
  switch (action.type) {
    case set_recent_posts:
      const recentPosts = action.payload;
      return {
        ...state,
        recentPosts
      };
    case set_results_posts:
      const resultsPosts = action.payload;
      return {
        ...state,
        resultsPosts
      };
    default:
      return state;
  }
}
