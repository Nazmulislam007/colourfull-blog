import { useState } from "react";
import imageUrl from "../../Api/imageApi";
import classes from "../../styles/GalleryComponent.module.css";
import Navbar from "../Navbar";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useMediaQuery from "../../useMediaQuery";

const Gallery = () => {
  const isDestop = useMediaQuery("(min-width: 800px)");

  const [img, setImg] = useState("");

  const imgSource = imageUrl.find((imgs) => imgs.id === img);

  const closeBtn = () => {
    setImg("");
  };

  return (
    <>
      {img && (
        <div className="windowImg">
          <img src={imgSource.imageUrl} alt="name" />
          <AiOutlineCloseCircle className="closeBtn" onClick={closeBtn} />
        </div>
      )}
      <Navbar />
      <div className="container">
        <div className={classes.gallery__container}>
          <h2 className="header" style={{ marginBottom: "5px" }}>
            Gallery
          </h2>

          <div
            to="/gallery"
            className={isDestop ? classes.gallery : classes.mediaGrid}
          >
            {imageUrl
              .filter((_, index) => index + 1)
              .map(({ imageUrl, id }) => (
                <img
                  className={classes.gallery__img}
                  key={id}
                  src={imageUrl}
                  alt="alt"
                  style={{ cursor: "pointer" }}
                  onClick={() => setImg(id)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
