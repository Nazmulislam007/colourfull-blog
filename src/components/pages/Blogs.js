import Navbar from "../Navbar";
import Footer from "../Footer";
import Blog from "../Blog";

const Blogs = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="header" style={{ marginBottom: "25px" }}>
          Blogs
        </h2>
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
