import React from "react";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
// import useStyles from "./styles.js";

const Posts = () => {
  // const classes = useStyles();
  // const posts = useSelector((state) => state.posts);
  // console.log(`this is a test ${posts}`);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
