import React from "react";
import axios from 'axios';

import BlogList from "../components/BlogList";

class BlogListPage extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/articles")
    .then(res => {
      this.setState({
        articles: res.data
      })
      console.log(res.data)
    })
  }

  render() {
    return(
      <BlogList />
      )
  }
}

export default BlogListPage;