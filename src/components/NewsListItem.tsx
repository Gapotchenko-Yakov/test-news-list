import { ListItem, ListItemText, Typography } from "@mui/material";
import { News } from "../types";

interface ListItemProps {
  news: News;
}

const NewsListItem = ({ news }: ListItemProps) => {
  return (
    <ListItem key={news.id} sx={{ borderBottom: "1px solid #ddd" }}>
      <ListItemText
        primary={news.title}
        secondary={
          <>
            <Typography component="span" variant="body2" color="text.primary">
              {news.description}
            </Typography>
            <br />
            <Typography component="span" variant="body2">
              By: {news.author} | Published:{" "}
              {new Date(news.publishedAt).toLocaleDateString()}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default NewsListItem;
