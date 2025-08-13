import React from "react";
import ArticleList from "../components/ArticleList";

function HomePage({ searchTerm }) {
  return <ArticleList searchTerm={searchTerm} />;
}

export default HomePage;
