import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import BigMovieCard from "./BigMovieCard";

function PopularMovies() {
    return (
        <>
            <Swiper
                slidesPerView={2.1}
                centeredSlides={true}
                spaceBetween={5}
                grabCursor={true}
                initialSlide={0}
                slidesPerGroup={1}
                slidesOffsetBefore={-90}

                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><BigMovieCard/></SwiperSlide>
                <SwiperSlide><BigMovieCard/></SwiperSlide>
                <SwiperSlide><BigMovieCard/></SwiperSlide>
                <SwiperSlide><BigMovieCard/></SwiperSlide>
                <SwiperSlide><BigMovieCard/></SwiperSlide>
                <SwiperSlide><BigMovieCard/></SwiperSlide>

            </Swiper>
        </>
    );
}

export default PopularMovies;