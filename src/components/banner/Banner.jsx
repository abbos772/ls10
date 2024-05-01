import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img3 from "../../img/OIF.jpg";
import img2 from "../../img/OIP.jpg";
import img1 from "../../img/R.jpg";
import img4 from "../../img/OIP.jpg";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="banner__swiper"
      >
        <SwiperSlide className="banner__item">
          <img src={img1} width={500} alt="" />
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img2} alt="" />
          <div className="banner__content">
            <h2></h2>
            <p></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="banner__item">
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
