import { set_recent_posts, set_results_posts } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get("https://api.dailysmarty.com/posts").then(response => {
      dispatch({
        type: set_recent_posts,
        payload: response.data.posts
      });
    });
  };
}

export function fetchQueryPosts(query, callback) {
  return function(dispatch) {
    axios
      .get(`https://api.dailysmarty.com/search?q=${query}`)
      .then(response => {
        dispatch({
          type: set_results_posts,
          payload: response.data.posts
        });
        if (callback) {
          callback();
        }
      });
  };
}
