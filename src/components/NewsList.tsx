import React, { useEffect, useState } from "react";
import { News } from "../types";
import { Container, Typography, List } from "@mui/material";
import NewsListItem from "./NewsListItem";

const NewsList = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    const newsFromStorage: News[] = JSON.parse(
      localStorage.getItem("newsList") || "[]"
    );
    setNewsList(newsFromStorage);
  }, []);

  const addNews = (newItem: News) => {
    const updatedNews = [...newsList, newItem];
    setNewsList(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };

  const deleteNews = (id: string) => {
    const updatedNews = newsList.filter((item) => item.id !== id);
    setNewsList(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };

  const editNews = (updatedItem: News) => {
    const updatedNews = newsList.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setNewsList(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };

  return (
    <Container>
      <Typography variant="h1" sx={{ color: "red", mb: 3 }}>
        News List
      </Typography>
      <List>
        {newsList.length > 0 ? (
          newsList.map((news) => <NewsListItem news={news} />)
        ) : (
          <Typography variant="body1">No news available.</Typography>
        )}
      </List>
    </Container>
  );
};

export default NewsList;
