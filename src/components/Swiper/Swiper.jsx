import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MySwiper = () => {
  return (
    <Swiper
      slidesPerView={10}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Slide 2
      </SwiperSlide>

      {}
    </Swiper>
  );
};

export default MySwiper;
