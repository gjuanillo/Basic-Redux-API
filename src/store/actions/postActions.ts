export const fetchPostRequest = () => ({
    type: "FETCH_POST_REQUEST",
});

export const fetchPostSuccess = (posts) => ({
    type: "FETCH_POST_SUCCESS",
    payload: posts,
});

export const fetchPostFailure = (error) => ({
    type: "FETCH_POST_FAILURE",
    payload: error,
});

export const fetchPosts = () => async (dispatch) {
    dispatch(fetchPostRequest());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchPostSuccess(data));
    } catch (error) {
    dispatch(fetchPostFailure(error.message));
    }
}
