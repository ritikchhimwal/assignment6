import axios from "axios"

export const POSTS_ACTIONS = {
    ALL_POSTS_PENDING: "ALL_POSTS_PENDING",
    ALL_POSTS_SUCCESS: "ALL_POSTS_SUCCESS",
    ALL_POSTS_ERROR: "ALL_POSTS_ERROR",
}

export const fetchPosts = () => {
    return async (dispatch) => {
        dispatch({ type: POSTS_ACTIONS.ALL_POSTS_PENDING });
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) throw new Error('Failed to fetch posts');
            const data = await res.json();
            dispatch({ type: POSTS_ACTIONS.ALL_POSTS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: POSTS_ACTIONS.ALL_POSTS_ERROR, payload: error.message });
        }
    };
};
