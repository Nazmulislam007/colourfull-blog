import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  BlogDetails,
  Blogs,
  Contact,
  Gallery,
  Home,
  SignIn,
  SignUp,
} from "./components";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/signin"
          element={
            <PrivateRoute>
              <SignIn />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
