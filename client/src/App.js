import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
// import useStyles from "./styles.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "./state/posts/posts";

const App = () => {
  // const classes = useStyles();

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsAsync()); // 🔁 fetch posts when component mounts
  }, []);

  useEffect(() => {
    console.log("Posts updated:", posts);
  }, [posts]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
