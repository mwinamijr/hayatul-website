import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "@/components/BlogList";

interface Article {
  id: number;
  title: string;
  content: string;
  [key: string]: any; // for any additional fields
}

const BlogListPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get<Article[]>("http://127.0.0.1:8000/articles")
      .then((res) => {
        setArticles(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });
  }, []);

  return <BlogList data={articles} />;
};

export default BlogListPage;
