import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";

const apiUri = 'https://sample-blog-express.vercel.app/api/'
const BlogPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [blogList, setBlogList] = React.useState([]);

  const addNew = () => {

  }

  const fetchBlogs = () => {
    axios.get(`${apiUri}blogs`).then((response) => {
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
        <Card style={{ width: '18rem' }} key={post._id}>
          <Card.Body>
            <Card.Title>{post.topic}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
            <Card.Text>
              {post.content}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
    setBlogList(mappedList);
  }, [blogs]);

  return (
    <Container fluid>
      <h1>Blogs</h1>
      <Button onClick={addNew}>Add</Button>
      <Button variant="success" href="/sol/new">Add</Button>
      <a class="button" variant="success" href="new">Add</a>
      {blogList}
    </Container>
  );
};

export default BlogPage;

export const Head = () => <title>Blogs</title>;
