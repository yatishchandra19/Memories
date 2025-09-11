import PostMessage from "../models/postMessage.js";
import StatusCodes from "http-status-codes";

const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(StatusCodes.OK).json({ posts });
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
  }
};

const getPost = async (req, res) => {
  const details = req.body;
  try {
    const post = await PostMessage.find(details);
    res.status(StatusCodes.OK).json({ post });
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const details = req.body;
  try {
    const post = await PostMessage.create(details);
    res.status(StatusCodes.CREATED).json({ post });
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
  }
};

export default { getPosts, getPost, createPost };
