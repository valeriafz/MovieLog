"use client";

import { Movie } from '@/types/movie';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { useAuth } from '@/context/AuthContext';

interface WatchlistProps {
  searchQuery?: string;
  activeFilter?: string | null;
}

export default function Watchlist({ searchQuery = '', activeFilter = null }: WatchlistProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const storedMovies = localStorage.getItem('watchlist');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

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

  if (filteredMovies.length === 0 || !user) {
    return (
      <div className="text-center p-8" style={{ color: 'var(--text-base)' }}>
        <p>No movies found matching your criteria.</p>
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
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
