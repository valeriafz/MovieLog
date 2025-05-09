"use client";

import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import api from '@/utils/api'; 

export default function User() {
  const [reviews, setReviews] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviewedMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        const response = await api.get('/movies');
        const allMovies = response.data;
        
        const completedReviews = allMovies.filter(
          (movie: Movie) => 
            movie.status === 'Completed' && 
            movie.review &&
            movie.review.trim() !== ''
        );
        
        setReviews(completedReviews);
      } catch (error: unknown) {
        setError('Failed to load your reviews. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewedMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-base border border-base text-base backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: 'var(--card-heading)' }}>
            Your reviews
          </h2>
        </div>
        <div className="text-center p-8" style={{ color: 'var(--card-body)' }}>
          <p>Loading your reviews...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-base border border-base text-base backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: 'var(--card-heading)' }}>
            Your reviews
          </h2>
        </div>
        <div className="text-center p-8" style={{ color: 'var(--card-body)' }}>
          <p className="text-red-500 mb-2">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-orange-700 text-white rounded-md hover:bg-orange-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base border border-base text-base backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 z-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold" style={{ color: 'var(--card-heading)' }}>
          Your reviews
        </h2>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center p-8" style={{ color: 'var(--card-body)' }}>
            <p>You haven&apos;t reviewed any movies yet.</p>
          </div>
        ) : (
          reviews.map((movie) => (
            <div
              key={movie.id}
              className="backdrop-blur-sm rounded-xl border p-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="flex gap-4 items-start">
                <div className="w-16 flex-shrink-0">
                  <div className="aspect-[2/3] rounded-lg overflow-hidden">
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-md font-bold" style={{ color: 'var(--card-heading)' }}>
                      {movie.title}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          style={{
                            color: i < movie.rating ? '#c2410c' : 'var(--star-empty)',
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs" style={{ color: 'var(--card-subtext)' }}>
                    Reviewed on {movie.dateReviewed?.split('T')[0] || movie.dateAdded.split('T')[0]}
                  </div>
                  <p className="text-sm line-clamp-2" style={{ color: 'var(--card-body)' }}>
                    {movie.review || 'No review text available.'}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}