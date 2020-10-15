import React from "react";

import BlogList from "../components/BlogList";

class BlogListPage extends React.Component {

  state = {
    articles: []
  }

  render() {
    return(
      <BlogList />
      )
  }
}

export default BlogListPage;