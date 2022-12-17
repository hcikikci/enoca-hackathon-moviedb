import React from 'react';

function BigMovieCard() {
    return (
        <div className="relative overflow-visible">
            <img src="/jurassicworld.png" className="object-cover rounded-[16px]" alt=""/>
            <span className="absolute text-white -left-2 -translate-y-24 text-dark-blue font-outline font-montserrat text-[6rem] drop-shadow-md">1</span>
        </div>
    );
}

export default BigMovieCard;