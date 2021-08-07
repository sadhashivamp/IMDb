import React, { useState } from 'react';  //useState component will be imported,impliment state in functional component
import MovieCard from './MovieCard';  // imported movieCard from moviecard component

export default function SearchMovie() { //functional component of searchMovies
  const [query, setQuery] = useState(''); //defining or pass query 
  const [movies, setMovies] = useState([]); //defining or pass movies
  
  const SearchMovies = async (e) => { //event handler for submite serch button
    e.preventDefault();
    console.log('submitting');

    //fetching the api
    const url = `https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <center>
   
    <form className="form" onSubmit={SearchMovies}>
        
        <input    //this is searchbar with event handler
          className="input"
          type="text"
          name="query"
          placeholder="search a movie" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        
        />
        <button className="button"  //search buttton
        >Search</button>  
        
      </form>
      
    <div className="card-list">
    {movies
      .filter((movie) => movie.poster_path)
      .map((movie) => ( //render movies with map method
        <MovieCard movie={movie} key={movie.id} />
      ))}
  </div>
  </center>
      
      );
    }
  