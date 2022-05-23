import Navbar from "../Navbar";
import Footer from "../Footer";
import Blog from "../Blog";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className={`margin-t-91 blogs`}>
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
