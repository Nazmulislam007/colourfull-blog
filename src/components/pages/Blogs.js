import Navbar from "../Navbar";
import Footer from "../Footer";
import Blog from "../Blog";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
