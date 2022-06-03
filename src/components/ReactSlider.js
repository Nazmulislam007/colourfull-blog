import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "../styles/ReactSlider.module.css";
import imageUrl from "../Api/imageApi";
import { MdAddLocationAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const ReactSlider = () => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          800: {
            slidesPerView: 1.5,
          },
        }}
      >
        {imageUrl
          .filter((item, index) => index < 5)
          .map(({ imageUrl, id, description, author, time, location }) => (
            <SwiperSlide key={id}>
              <Link to={`/blogs/${id}`}>
                <div className={classes.swiperSlide__child}>
                  <div className={classes.swiperSlide__img__container}>
                    <img src={imageUrl} alt="slider" />
                  </div>
                  <div className={classes.img__info__div}>
                    <p className={classes.info__location}>
                      <MdAddLocationAlt
                        style={{ margin: "-2px 5px 0 0" }}
                        color="green"
                      />
                      {location}
                    </p>
                    <h1 className={classes.info__description}>{description}</h1>
                    <div>
                      <p className={classes.info__author}>{author}</p>
                      <p className={classes.info__time}>{time}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default ReactSlider;
