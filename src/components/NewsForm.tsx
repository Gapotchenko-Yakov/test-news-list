import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  ContainerProps,
} from "@mui/material";
import { News } from "../types";

interface NewsFormProps extends ContainerProps {
  addOrEditNews: (news: News) => void;
  existingNews?: News;
}

const NewsForm = ({ addOrEditNews, existingNews, sx }: NewsFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [createdAt, setCreatedAt] = useState(
    new Date().toISOString().substring(0, 10)
  );

  useEffect(() => {
    if (existingNews) {
      setTitle(existingNews.title);
      setContent(existingNews.content);
      setAuthor(existingNews.author);
      setCreatedAt(
        new Date(existingNews.createdAt).toISOString().substring(0, 10)
      );
    }
  }, [existingNews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNews: News = {
      id: existingNews ? existingNews.id : Date.now().toString(),
      title,
      content,
      author,
      createdAt: existingNews ? existingNews.createdAt : new Date(),
    };

    addOrEditNews(newNews);

    setTitle("");
    setContent("");
    setAuthor("");
    setCreatedAt(new Date().toISOString().substring(0, 10));
  };

  return (
    <Box sx={sx}>
      <Typography variant={existingNews ? "h5" : "h4"} gutterBottom>
        {existingNews ? "Update News" : "Add News"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={4}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            required
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          {existingNews ? "Update News" : "Add News"}
        </Button>
      </form>
    </Box>
  );
};

export default NewsForm;
