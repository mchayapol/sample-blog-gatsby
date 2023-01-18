import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const NewBlogPage = () => {
  const formRef = React.useRef({});
  React.useEffect(() => {}, []);

  const onClick = React.useCallback((e) => {
    e.preventDefault();
    const data = {
      topic: formRef.current["formTopic"].value,
      category: formRef.current["formCategory"].value,
      content: formRef.current["formContent"].value,
      author: formRef.current["formAuthor"].value,
    }

    console.debug(data);
  }, [formRef]);

  return (
    <Container>
      <h1>New Blog</h1>
      <Form ref={formRef}>
        <Form.Group className="mb-3" controlId="formTopic">
          <Form.Label>Topic</Form.Label>
          <Form.Control type="text" placeholder="Topic" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select aria-label="Category">
            <option value="0">-- Choose Category --</option>
            <option value="1">Games</option>
            <option value="2">Sport</option>
            <option value="3">Tech</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContent">
          <Form.Control as="textarea" placeholder="Content" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Author" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onClick}>
          Post
        </Button>
      </Form>
    </Container>
  );
};

export default NewBlogPage;

export const Head = () => <title>New Blogs</title>;
