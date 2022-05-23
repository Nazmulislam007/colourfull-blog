import React from "react";
import { AiOutlineTags } from "react-icons/ai";
import imageUrl from "../Api/imageApi";
import classes from "../styles/BlogSection.module.css";
import Blog from "./Blog";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

const BlogSection = () => {
  return (
    <>
      <div className={classes.blog__section}>
        <Blog isSimpilified />
        <div className={classes.options}>
          <div className={classes.popular__post}>
            <h2 className={classes.popular__post__header}>Popular post</h2>
            {imageUrl.slice(6, 9).map(({ imageUrl, id, tag, description }) => (
              <div key={id} className={classes.popular__post__card}>
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
              </div>
            ))}
          </div>
          <div>
            <h2 className={classes.popular__post__header}>Tags Cloud</h2>
            <div className={classes.tag}>
              <button className="btn btn--red">Home</button>
              <button className="btn btn--blue">Family</button>
              <button className="btn btn--purple">Love</button>
              <button className="btn btn--liteBlue">Grace</button>
              <button className="btn btn--violet">Bueaty</button>
              <button className="btn btn--sky">Experiences</button>
              <button className="btn btn--yellow">Personal</button>
            </div>
          </div>
          <div>
            <h2 className={classes.popular__post__header}>Social Profiles</h2>
            <div className={classes.social}>
              <a
                href="https://www.twitter.com"
                className="btn btn--sky btn--position"
              >
                Twitter <span>Follow Me!</span>
              </a>
              <a
                href="https://www.facebook.com"
                className="btn btn--blue btn--position"
              >
                Facebook <span>Follow Me!</span>
              </a>
              <a
                href="https://www.instagram.com"
                className="btn btn--red btn--position"
              >
                Instagram <span>Follow Me!</span>
              </a>
            </div>
          </div>

          <div className={classes.gallery__container}>
            <h2
              className={classes.popular__post__header}
              style={{ marginBottom: "5px" }}
            >
              Gallery
            </h2>
            <div className={classes.gallery}>
              {imageUrl
                .filter((item, index) => index >= 5)
                .map(({ imageUrl, id }) => (
                  <img
                    className={classes.gallery__img}
                    key={id}
                    src={imageUrl}
                    alt="alt"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogSection;
