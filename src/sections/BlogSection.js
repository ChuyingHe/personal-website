import Badge from "react-bootstrap/Badge";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      <h1>
        Notebooks for certifications <Badge bg="secondary">New</Badge>
      </h1>
      <div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Blog;
