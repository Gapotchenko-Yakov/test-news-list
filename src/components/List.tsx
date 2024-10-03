import React, { useEffect, useState } from "react";
import { News } from "../types";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const NewsList = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    const newsFromStorage: News[] = JSON.parse(
      localStorage.getItem("newsList") || "[]"
    );
    setNewsList(newsFromStorage);
  }, []);

  return (
    <Container>
      <Typography variant="h1" sx={{ color: "red", mb: 3 }}>
        News List
      </Typography>
      <List>
        {newsList.length > 0 ? (
          newsList.map((news) => (
            <ListItem key={news.id} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={news.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
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
          ))
        ) : (
          <Typography variant="body1">No news available.</Typography>
        )}
      </List>
    </Container>
  );
};

export default NewsList;
