// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import './Banner.css';

import "./Banner.css";
import image1 from "../../assets/images/banner/pngfind.com-naruto-png-1283713-01.png";
import image2 from "../../assets/images/banner/favpng_spider-man-iron-man-venom-iron-spider-marvel-cinematic-universe.png"
import image3 from "../../assets/images/banner/favpng_batman-flash-justice-league-variant-superman-action-toy-figures-01.png"
// import required modules
import { Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-img">
            <img src={image1} alt="" />
          </div>
          <div className="banner-content">
            <h3>WELCOME TO TOYZONE!</h3>
            <h2>Special Edition</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="banner-img">
            <img src={image2} alt="" />
          </div>
          <div className="banner-content">
            <h3>WELCOME TO TOYZONE!</h3>
            <h2>Special Edition</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry
            </p>
            <button>SHOP NOW</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="banner-img">
            <img src={image3} alt="" />
          </div>
          <div className="banner-content">
            <h3>WELCOME TO TOYZONE!</h3>
            <h2>Special Edition</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
