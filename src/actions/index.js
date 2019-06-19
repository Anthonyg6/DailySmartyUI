import { set_recent_posts } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get("https://api.dailysmarty.com/posts").then(response => {
      console.log(response.data.posts);
      dispatch({
        type: set_recent_posts,
        payload: response.data.posts
      });
    });
  };
}

export function fetchQueryPosts(query) {
  return function(dispatch) {
    axios
      .get(`https://api.dailysmarty.com/search?q=${query}`)
      .then(response => {
        console.log(response.data.posts);
        // dispatch({
        //   type: set_recent_posts,
        //   payload: response.data.posts
        // });
      });
  };
}
