import React from "react";

import classes from "../styles/BlogSection.module.css";
import Blog from "./Blog";
import Footer from "./Footer";
import GalleryComponent from "./GalleryComponent";
import Popular from "./Popular";
import Social from "./Social";
import Subscribe from "./Subscribe";
import Tags from "./Tags";

const BlogSection = () => {
  return (
    <>
      <div className={classes.blog__section}>
        <Blog isSimpilified />
        <div className={classes.options}>
          <Popular />
          <Tags />
          <Social />
          <GalleryComponent isSimpilified />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogSection;
