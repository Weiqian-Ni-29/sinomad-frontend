import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Gallery = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      {/* 主图片展示 */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="main-swiper"
      >
        {props.imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} style={{ width: "450px", height: "600px" }} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 缩略图 */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={6} // 一行显示几个缩略图
        spaceBetween={10}
        className="thumbs-swiper"
      >
        {props.imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Thumbnail ${index}`} style={{ width: "90px", height:"130px" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
