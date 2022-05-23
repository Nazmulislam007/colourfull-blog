import { Route, Routes } from "react-router-dom";
import {
  About,
  BlogDetails,
  Blogs,
  Contact,
  Gallery,
  Home,
} from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path="/blogs:id" element={<BlogDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
