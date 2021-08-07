import React from 'react';
import './MovieCard.css'

export default function MovieCard({ movie }) {  //initialize the movies,movies that comes from parent
  return (
    <div className="card" key={movie.id}>
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        
      </div>
    </div>
  );
}