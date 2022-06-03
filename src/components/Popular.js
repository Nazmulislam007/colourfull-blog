import React from "react";
import imageUrl from "../Api/imageApi";
import classes from "../styles/Popular.module.css";
import { AiOutlineTags } from "react-icons/ai";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <>
      <div className={classes.popular__post}>
        <h2 className="header">Popular post</h2>
        {imageUrl.slice(6, 9).map(({ imageUrl, id, tag, description }) => (
          <Link
            to={`/blogs/${id}`}
            key={id}
            className={classes.popular__post__card}
          >
            <div className={classes.card__img}>
              <img src={imageUrl} alt="name" />
            </div>
            <div className={classes.card__content}>
              <h2>{description}</h2>
              <div>
                <AiOutlineTags
                  style={{ margin: "-2px 5px 0 0" }}
                  color="green"
                />
                <p>{tag}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Popular;
