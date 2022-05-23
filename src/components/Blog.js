import React, { useState } from "react";
import imageUrl from "../Api/imageApi";
import useMediaQuery from "../useMediaQuery";
import classes from "../styles/Blog.module.css";

const Blog = ({ isSimpilified }) => {
  const isDestop = useMediaQuery("(min-width: 800px)");
  const [totalImg] = useState(
    imageUrl.filter((item, index) => (isSimpilified ? index <= 7 : index + 1))
  );
  return (
    <>
      <div className={classes.grid}>
        {totalImg?.map(({ imageUrl, id, location, description }) => (
          <div key={id} className={classes.card}>
            <img
              src={imageUrl}
              alt="name"
              width="800"
              height={isDestop ? "290" : "200"}
              className={classes.card__img_radio}
            />
            <p className={classes.card__name}>{location}</p>
            <h2 className={classes.card__header}>{description}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
