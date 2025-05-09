"use client";

import { Movie } from '@/types/movie';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import api from '@/utils/api'; 

interface WatchlistProps {
  searchQuery?: string;
  activeFilter?: string | null;
}

export default function Watchlist({ searchQuery = '', activeFilter = null }: WatchlistProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await api.get('/movies');
      setMovies(response.data);
    } catch (error: unknown) {
      setError('Failed to load movies. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []); 

  const handleMovieUpdate = () => {
    fetchMovies(); 
  };

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (activeFilter === 'completed') {
      matchesFilter = movie.status === 'Completed';
    } else if (activeFilter === 'watch-later') {
      matchesFilter = movie.status === 'Watch later';
    } else if (activeFilter === 'higher-reviewed') {
      matchesFilter = movie.rating >= 3;
    } else if (activeFilter === 'lower-reviewed') {
      matchesFilter = movie.rating < 3;
    }
    
    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return (
      <div className="text-center p-8" style={{ color: 'var(--text-base)' }}>
        <p>Loading your movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8" style={{ color: 'var(--text-base)' }}>
        <p className="text-red-500">{error}</p>
        <button 
          onClick={fetchMovies}
          className="mt-2 px-4 py-2 bg-orange-700 text-white rounded-md hover:bg-orange-800"
        >
          Retry
        </button>
      </div>
    );
  }

  if (filteredMovies.length === 0) {
    return (
      <div className="text-center p-8" style={{ color: 'var(--text-base)' }}>
        <p>No movies found matching your criteria.</p>
        {movies.length === 0 && (
          <p className="mt-2">Start by adding some movies to your watchlist!</p>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--card-heading)' }}>
        Your Movies ({filteredMovies.length})
      </h2>

      <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: '50vh' }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
          {filteredMovies.map(movie => (
            <div className="flex justify-center" key={movie.id}>
              <MovieCard 
                {...movie}
                onUpdate={handleMovieUpdate} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}