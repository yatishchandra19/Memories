import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

const initialState = [];

export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    try {
      const { data } = await api.fetchPosts();
      console.log("Inside Create Thunk posts/getPostsAsync", data.posts);
      return data.posts;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const createPostAsync = createAsyncThunk(
  "posts/createPostAsync",
  async (newPost) => {
    try {
      const { data } = await api.createPost(newPost);
      console.log("Inside Create Thunk posts/createPostAsync", data.post);
      return data.post;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getPostsAsync.pending, () => {
      //   console.log("getPostsAsync.pending");
      // })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        console.log("Inside getPostsAsync.fulfilled Payload:", action.payload);
        return Array.isArray(action.payload) ? action.payload : [];
      })
      // .addCase(createPostAsync.pending, () => {
      //   console.log("createPostAsync.pending");
      // })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        console.log(
          "Inside createPostAsync.fulfilled Payload:",
          action.payload,
          JSON.parse(JSON.stringify(state))
        );
        const safeState = Array.isArray(state) ? state : [];
        return [...safeState, action.payload];
      });
  },
});

export default postsSlice.reducer;
