"use client";

import { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; 
import { Movie } from '@/types/movie';

export default function Watchlist() {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    const storedMovies = localStorage.getItem('watchlist');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  const updateMovie = (updatedMovie: Movie) => {
    const updatedMovies = movies.map(movie => 
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    
    setMovies(updatedMovies);
    localStorage.setItem('watchlist', JSON.stringify(updatedMovies));
  };

  if (movies.length === 0) {
    return (
      <div className="text-center p-8" style={{ color: 'var(--text-base)' }}>
        <p>Your watchlist is empty. Add some movies to get started!</p>
      </div>
    );
  }

  return (
    <div className="p-4 mx-auto max-w-7xl">
  <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--card-heading)' }}>
    Your Watchlist
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
    {movies.map(movie => (
      <div className="flex justify-center">
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        imageUrl={movie.imageUrl}
        rating={movie.rating}
        status={movie.status}
        review={movie.review}
        
      />
      </div>
    ))}
  </div>
  </div>
  );
}