import { set_recent_posts } from "../actions/types";

const init_state = {
  posts: [],
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
    default:
      return state;
  }
}
