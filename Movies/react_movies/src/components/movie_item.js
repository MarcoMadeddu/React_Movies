import React from 'react';
export default function movieItem({movie}){
    return(
        <div className="card col-md-3 col-sm-6">
            <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}