import React, { useState } from "react";
import imageUrl from "../Api/imageApi";
import useMediaQuery from "../useMediaQuery";
import classes from "../styles/Blog.module.css";
import { Link } from "react-router-dom";

const Blog = ({ isSimpilified }) => {
  const isDestop = useMediaQuery("(min-width: 800px)");
  const [totalImg] = useState(
    imageUrl.filter((item, index) => (isSimpilified ? index <= 7 : index + 1))
  );

  return (
    <>
      <div className={classes.grid}>
        {totalImg?.map(({ imageUrl, id, location, description }) => (
          <Link to={`/blogs/${id}`} key={id} className={classes.card}>
            <img
              src={imageUrl}
              alt="name"
              width="800"
              height={isDestop ? "290" : "200"}
              className={classes.card__img_radio}
            />
            <p className={classes.card__name}>{location}</p>
            <h2 className={classes.card__header}>{description}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
