import { set_recent_posts} from "../actions/types";

const init_state = {
    posts: [],
    recentPosts: []
};

export default function(state= init_state, action) {
    switch(action,type) {
        case set_recent_posts:
            return [...state, recentPosts: action.payload]
        default:
            return state;
    }
}