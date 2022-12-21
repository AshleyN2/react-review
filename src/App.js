import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8c427a19";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("all");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieMania</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

/*
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8c427a19';

const movie1 = {
    'Title': 'Superman',
    'Year': '1978',
    'Type': 'movie',
    'imdbID': 'tt0078346',
    'Poster': 'N/A'
};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {

        const response = await fetch(` ${API_URL} &s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

  return (
    <div className='app'>
      <h1>MovieMania</h1>
      
        <div className='search'>
            <input type='text' className='search-box' 
            placeholder='Search for a movie...' 
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} />

            <img src={SearchIcon} alt='Search'
            onClick={() => {}} />
        </div>

        {movies?.length > 0?(
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} /> 
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )

        }

        <div className='container'>
            <MovieCard movie1={movie1} />
        </div>
    </div>
  );
}

export default App;
*/