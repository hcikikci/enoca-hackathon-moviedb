import React from 'react';
import Searchbar from "../Home/Searchbar";
import BigMovieCard from "../MovieCard/BigMovieCard";
import PopularMovies from "../MovieCard/PopularMovies";


function Home() {
    return (
        <div className="bg-dark-blue w-full h-screen px-[24px]">
            <Searchbar/>

            <PopularMovies/>
        </div>
    );
}

export default Home;