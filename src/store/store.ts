import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/postReducer";
import type { PostState } from "../types/types";

export interface RootState {
    posts: PostState;
}

const initialState: RootState = {
    posts: {
        posts: [],
        loading: false,
        error: null
    }
}

export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
