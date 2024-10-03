import {
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { News } from "../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import NewsForm from "./NewsForm";

interface ListItemProps {
  news: News;
  deleteNews: (id: string) => void;
  editNews: (updatedItem: News) => void;
}

const NewsListItem = ({ news, deleteNews, editNews }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedNews: News) => {
    editNews(updatedNews);
    setIsEditing(false);
  };

  return (
    <ListItem
      key={news.id}
      sx={{
        borderBottom: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
      >
        <ListItemText
          primary={news.title}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
                sx={{
                  textWrap: "wrap",
                  wordWrap: "break-word",
                  // flexWrap: "wrap",
                }}
              >
                {news.content}
              </Typography>
              <br />
              <Typography component="span" variant="body2">
                By: {news.author} | Published:{" "}
                {new Date(news.createdAt).toLocaleDateString()}
              </Typography>
            </>
          }
        />
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <IconButton
            color="primary"
            onClick={() => setIsEditing((prev) => !prev)}
            aria-label="edit"
            sx={{ marginRight: 1 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => deleteNews(news.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>

      {isEditing && <NewsForm addOrEditNews={handleEdit} existingNews={news} />}
    </ListItem>
  );
};

export default NewsListItem;
