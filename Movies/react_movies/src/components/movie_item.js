import React from 'react';
export default function movieItem({movie}){
    return(
        <div className="card_movie">
            <img src={movie.Poster} className="card_img" alt={movie.Title}/>
            <div className="card_body">
                <h5 className="card_title">{movie.Title}</h5>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}