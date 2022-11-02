import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../assets/images/homeCarousel/1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipper.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Swipper = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          //chobi upore iche korte chaile etar css er height change korte hobe
          data-swiper-parallax="-23%"
          style={{
            "background-image": `linear-gradient(to left, rgba(87, 85, 85, 0.52), rgba(10, 10, 10, 0.73)),url(${image})`,
          }}
        ></div>
        <SwiperSlide>
          <div className="text md:m-20 mt-20 mb-10" data-swiper-parallax="-100">
            <div
              className="lg:text-6xl text-5xl font-bold"
              data-swiper-parallax="-300"
            >
              AFFORDABLE PRICE FOR CAR SERVICING
            </div>
            <div className="hidden md:flex" data-swiper-parallax="-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              possimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Et, possimus.
            </div>
            <div className="mt-5">
              <button className="btn">
                <Link to={"/appointment"}>Take Appointment</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text md:m-20 mt-20 mb-10" data-swiper-parallax="-100">
            <div
              className="lg:text-6xl text-5xl font-bold"
              data-swiper-parallax="-300"
            >
              GREAT CUSTOMER SERVICE
            </div>
            <div className="hidden md:flex" data-swiper-parallax="-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              possimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Et, possimus.
            </div>
            <div className="mt-5">
              <button className="btn">
                <Link to={"/appointment"}>Take Appointment</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text md:m-20 mt-20 mb-10" data-swiper-parallax="-100">
            <div
              className="lg:text-6xl text-5xl font-bold"
              data-swiper-parallax="-300"
            >
              FAMILY OWNED & OPERATED SINCE 1977!
            </div>
            <div className="hidden md:flex" data-swiper-parallax="-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              possimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Et, possimus.
            </div>
            <div className="mt-5">
              <button className="btn">
                <Link to={"/appointment"}>Take Appointment</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
