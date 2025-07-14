import type { Dispatch } from "redux";
import type { Post, PostAction } from "../../types/types";

export const fetchPostRequest = (): PostAction => ({
    type: "FETCH_POST_REQUEST",
});

export const fetchPostSuccess = (posts: Post[]): PostAction => ({
    type: "FETCH_POST_SUCCESS",
    payload: posts,
});

export const fetchPostFailure = (error: string): PostAction => ({
    type: "FETCH_POST_FAILURE",
    payload: error,
});

export const fetchPosts = () => async (dispatch: Dispatch<PostAction>) => {
    dispatch(fetchPostRequest());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        dispatch(fetchPostSuccess(data));
    } catch (error: unknown) {
        dispatch(fetchPostFailure(error.message));
    }
}
