import { useState } from "react";
// import useStyles from "./styles.js";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../../state/posts/posts";

const Form = () => {
  // const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPostAsync(postData));
  };

  const clear = () => {};

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              const reader = new FileReader(); // ✅ reader is declared BEFORE being used

              reader.onloadend = () => {
                setPostData({ ...postData, selectedFile: reader.result });
              };

              reader.readAsDataURL(file); // ✅ Now we can safely use it
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
