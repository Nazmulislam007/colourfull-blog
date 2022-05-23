import classes from "../../styles/Blogs.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Blog from "../Blog";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className={`margin-t-91 ${classes.blogs}`}>
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
