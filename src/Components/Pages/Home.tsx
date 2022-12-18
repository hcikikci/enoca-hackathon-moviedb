import React from 'react';
import Searchbar from "../Home/Searchbar";
import BigMovieCard from "../MovieCard/BigMovieCard";
import PopularMovies from "../MovieCard/PopularMovies";
import MovieCategories from "../Home/MovieCategories";


function Home() {
    return (
        <div className="px-[24px]">
            <Searchbar/>

            <PopularMovies/>
            <MovieCategories/>

        </div>
    );
}

export default Home;