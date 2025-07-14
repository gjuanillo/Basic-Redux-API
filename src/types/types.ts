export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export interface FetchPostRequestAction {
  type: "FETCH_POST_REQUEST";
}

export interface FetchPostSuccessAction {
  type: "FETCH_POST_SUCCESS";
  payload: Post[];
}

export interface FetchPostFailureAction {
  type: "FETCH_POST_FAILURE";
  payload: string;
}

export type PostAction =
  | FetchPostRequestAction
  | FetchPostSuccessAction
  | FetchPostFailureAction;
