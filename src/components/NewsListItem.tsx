import {
  ListItem,
  ListItemText,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { News } from "../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ListItemProps {
  news: News;
  deleteNews: (id: string) => void;
  editNews: (updatedItem: News) => void;
}

const NewsListItem = ({ news, deleteNews, editNews }: ListItemProps) => {
  console.log("🚀 ~ NewsListItem ~ news:", news.createdAt);
  return (
    <ListItem
      key={news.id}
      sx={{
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ListItemText
        primary={news.title}
        secondary={
          <>
            <Typography component="span" variant="body2" color="text.primary">
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
      <Box>
        <IconButton
          color="primary"
          onClick={() => editNews(news)}
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
    </ListItem>
  );
};

export default NewsListItem;
