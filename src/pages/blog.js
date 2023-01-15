import * as React from "react";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [blogList, setBlogList] = React.useState([]);

  const fetchBlogs = () => {
    axios.get("http://localhost:3000/api/blogs").then((response) => {
      console.log("response", response);
      const list = response.data;
      setBlogs(list);
    });
  };

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  React.useEffect(() => {
    const mappedList = blogs.map((post) => {
      return (
        <div key={post._id}>
          <h2>{post.topic}</h2>
          <p>{post.content}</p>
          <p>{post.author}</p>
        </div>
      );
    });
    setBlogList(mappedList);
  }, [blogs]);

  return (
    <main>
      <h1>Blogs</h1>
      {blogList}
    </main>
  );
};

export default BlogPage;

export const Head = () => <title>Blogs</title>;
