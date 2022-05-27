import React from "react";
import classes from "../styles/GalleryComponent.module.css";
import imageUrl from "../Api/imageApi";
import { Link } from "react-router-dom";

const GalleryComponent = () => {
  return (
    <>
      <div className={classes.gallery__container}>
        <h2 className="header" style={{ marginBottom: "5px" }}>
          Gallery
        </h2>

        <Link to="/gallery" className={classes.gallery}>
          {imageUrl.slice(5, 14).map(({ imageUrl, id }) => (
            <img
              className={classes.gallery__img}
              key={id}
              src={imageUrl}
              alt="alt"
            />
          ))}
        </Link>
      </div>
    </>
  );
};

export default GalleryComponent;
