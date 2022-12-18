import 'react-tabs/style/react-tabs.css';
import './styles.css'
import React, {useState} from 'react';
import {useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";

function MovieCategories() {
    const [selectedCategory, selectCategory] = useState("now_playing")
    const movies = useAppSelector(state => state.itemReducer.movies)
    return (
        <div>
            <ul className="hiddenscrollbar text-white flex space-x-6 py-4 overflow-x-auto whitespace-nowrap">
                <li className={`inline-block pb-2 ` + (selectedCategory === "now_playing" ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory("now_playing")}>Now playing</li>
                <li className={`inline-block pb-2 ` + (selectedCategory === "upcoming" ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory("upcoming")}>Upcoming</li>
                <li className={`inline-block pb-2 ` + (selectedCategory === "top_rated" ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory("top_rated")}>Top rated</li>
                <li className={`inline-block pb-2 ` + (selectedCategory === "popular" ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory("popular")}>Popular</li>
            </ul>

            <div className="grid grid-cols-3 gap-y-5 gap-x-4">
                {movies?.[selectedCategory]?.length > 0 ? (
                    movies?.[selectedCategory].map((movie : any)=> (
                        <Link to={"/details/" + movie.id}>
                            <img src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path} className="object-contain rounded-[16px] w-[100px] h-[144px] " alt=""/>

                        </Link>
                    ))
                ) : null}
            </div>
        </div>
    )
        ;
}

export default MovieCategories;