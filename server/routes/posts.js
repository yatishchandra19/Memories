import express from "express";
import postControllers from "../controllers/posts.js";

const postsRouter = express.Router();

postsRouter
  .route("/posts")
  .get(postControllers.getPosts)
  .post(postControllers.createPost);

postsRouter.route("/posts/:id").get(postControllers.getPost);

export default postsRouter;
