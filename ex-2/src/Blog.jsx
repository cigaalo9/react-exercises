import Header from "./Header";
import Post from "./Post";
import Footer from "./Footer";

function Blog() {
  return (
    <div className="blog">
      <Header />

      <Post
        title="First Blog Post"
        content="This is my first blog post built with React components."
      />

      <Post
        title="Second Blog Post"
        content="React makes it easy to build reusable UI components."
      />

      <Footer />
    </div>
  );
}

export default Blog;
