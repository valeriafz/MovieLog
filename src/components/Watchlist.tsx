"use client";

import { Movie } from '@/types/movie';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

interface WatchlistProps {
  searchQuery?: string;
  activeFilter?: string | null;
}

const MOVIES_PER_PAGE = 15;

export default function Watchlist({ searchQuery = '', activeFilter = null }: WatchlistProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const storedMovies = localStorage.getItem('watchlist');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
    setCurrentPage(1); 
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

  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * MOVIES_PER_PAGE,
    currentPage * MOVIES_PER_PAGE
  );

  if (filteredMovies.length === 0) {
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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
        {paginatedMovies.map(movie => (
          <div className="flex justify-center" key={movie.id}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-base border border-base disabled:opacity-50"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-md ${currentPage === page ? 'bg-orange-600 text-white' : 'bg-base border border-base'}`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-base border border-base disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}