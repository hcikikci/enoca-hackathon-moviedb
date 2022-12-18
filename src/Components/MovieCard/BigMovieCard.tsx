import React from 'react';
import {Link} from "react-router-dom";

function BigMovieCard(props: { poster_path: string;index : string, id:number}) {
    return (
        <Link to={"/details/" + props.id} className="relative overflow-visible">
            <img src={"https://image.tmdb.org/t/p/w500/" + props.poster_path} className="object-cover rounded-[16px]" alt=""/>
            <span className="absolute text-white -left-2 -translate-y-24 text-dark-blue font-outline font-montserrat text-[6rem] drop-shadow-md">{props.index}</span>
        </Link>
    );
}

export default BigMovieCard;