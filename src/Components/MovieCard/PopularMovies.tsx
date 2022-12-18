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
import {useAppSelector} from "../../app/hooks";

function PopularMovies() {
    const popular_movies = useAppSelector(state => state.itemReducer.movies?.popular)
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
                {popular_movies?.length > 0 ? popular_movies.map((movie : any, index : any)=> (

                    <SwiperSlide><BigMovieCard poster_path={movie?.poster_path} index={index+1} id={movie?.id}/></SwiperSlide>
                )) : null}


            </Swiper>
        </>
    );
}

export default PopularMovies;