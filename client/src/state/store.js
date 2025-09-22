import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/posts.js";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
