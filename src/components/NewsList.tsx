import React, { useEffect, useRef, useState } from "react";
import { News } from "../types";
import { Container, Typography, List } from "@mui/material";
import NewsListItem from "./NewsListItem";
import NewsForm from "./NewsForm";

const NewsList = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const renderCounterRef = useRef(0);

  useEffect(() => {
    const newsFromStorage: News[] = JSON.parse(
      localStorage.getItem("newsList") || "[]"
    );
    setNewsList(newsFromStorage);
  }, []);

  useEffect(() => {
    renderCounterRef.current += 1;
  });

  const addNews = (newItem: News) => {
    const updatedNews = [...newsList, newItem];
    setNewsList(updatedNews);
    localStorage.setItem("newsList", JSON.stringify(updatedNews));
  };

  const deleteNews = (id: string) => {
    const updatedNews = newsList.filter((item) => item.id !== id);
    setNewsList(updatedNews);
    localStorage.setItem("newsList", JSON.stringify(updatedNews));
  };

  const editNews = (updatedItem: News) => {
    const updatedNews = newsList.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setNewsList(updatedNews);
    localStorage.setItem("newsList", JSON.stringify(updatedNews));
  };

  return (
    <Container>
      <Typography variant="h1" sx={{ mb: 3 }}>
        News List
      </Typography>
      <Typography variant="h6">
        Render count: {renderCounterRef.current}
      </Typography>
      <List>
        {newsList.length > 0 ? (
          newsList.map((news) => (
            <NewsListItem
              news={news}
              deleteNews={deleteNews}
              editNews={editNews}
            />
          ))
        ) : (
          <Typography variant="body1">No news available.</Typography>
        )}
      </List>
      <NewsForm addNews={addNews} />
    </Container>
  );
};

export default NewsList;
