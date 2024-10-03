import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { News } from "../types";

interface NewsFormProps {
  addNews: (news: News) => void;
}

const NewsForm = ({ addNews }: NewsFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [createdAt, setCreatedAt] = useState(
    new Date().toISOString().substring(0, 10)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNews: News = {
      id: Date.now().toString(),
      title,
      content,
      author,
      createdAt: new Date(createdAt),
    };

    addNews(newNews);

    setTitle("");
    setContent("");
    setAuthor("");
    setCreatedAt(new Date().toISOString().substring(0, 10));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add News
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
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Creation Date"
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add News
        </Button>
      </form>
    </Container>
  );
};

export default NewsForm;
