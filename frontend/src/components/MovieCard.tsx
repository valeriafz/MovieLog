"use client";

import React, { useState, useRef, useEffect } from 'react';
import api from '@/utils/api'; 

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  status: 'Completed' | 'Watch later';
  review?: string;
  id?: number;
  userId?: string;
  onUpdate?: () => void; 
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  title, 
  imageUrl, 
  rating, 
  status, 
  review = '',
  id,
  onUpdate
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(status === 'Completed' ? rating : 0);
  const [userReview, setUserReview] = useState(review);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(null);
    document.body.style.overflow = 'auto';
  };

  const handleStarClick = (selectedRating: number) => {
    setUserRating(selectedRating);
  };

  const handleStarHover = (hoverRating: number) => {
    setHoveredRating(hoverRating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSaveReview = async () => {
  if (!id) {
    setError('Movie ID is missing');
    return;
  }

  setIsLoading(true);
  setError(null);

  try {
    const updateData = {
      rating: userRating,
      review: userReview
    };

    const response = await api.put(`/movies/${id}`, updateData);
    
    console.log('Updated movie:', response.data);
    
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    
    if (onUpdate) {
      onUpdate(); 
    }
  } catch (error: unknown) {
    let errorMessage = 'Failed to save changes. Please try again.';
    
    if (error instanceof Error) {
      console.error('Error:', error.message);
      
      if ('response' in error) {
        const axiosError = error as { 
          response?: {
            status: number;
            data?: { message?: string };
          };
        };
        
        if (axiosError.response?.status === 401) {
          errorMessage = 'Session expired. Please login again.';
        } else if (axiosError.response?.status === 400) {
          errorMessage = axiosError.response.data?.message || 'Invalid data format';
        }
      }
    }
    
    setError(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const displayRating = hoveredRating > 0 ? hoveredRating : userRating;

  return (
    <div className="w-30 sm:w-48 shadow-sm text-left relative"> 
      <div onClick={handleOpenModal} className="cursor-pointer">
        <img
          className="rounded-lg w-full h-42 sm:h-64 object-cover"
          src={imageUrl}
          alt={`Cover of ${title}`}
        />
      </div>
      <div className="px-2 sm:px-3 pb-2 sm:pb-3 pt-1 sm:pt-2">
        <div onClick={handleOpenModal} className="cursor-pointer">
          <h5 className="text-base font-semibold tracking-tight line-clamp-2 mb-1" style={{ color: 'var(--card-heading)' }}>
            {title}
          </h5>
        </div>
        <div className="flex items-center mb-1">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-orange-700' : ''}`}
                style={{ color: i < rating ? '#c2410c' : 'var(--star-empty)' }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium mt-0" style={{ color: 'var(--card-subtext)' }}>
            {status}
          </span>
          
          <button 
            className="group relative p-1"
            onClick={handleOpenModal}
          >
            <div 
              className={`transition-all duration-200 w-7 h-7 flex items-center justify-center rounded-full ${
                status === 'Completed' 
                  ? 'bg-white text-orange-700' 
                  : 'group-hover:bg-white group-active:bg-white'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  status === 'Completed' 
                    ? 'text-orange-700' 
                    : 'text-black group-hover:text-orange-700 group-active:text-orange-700'
                } transition-colors duration-200`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-80 backdrop-blur-20 z-40"></div>
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div 
              ref={modalRef}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-5 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-black dark:text-white font-semibold text-lg">
                  {title}
                </h3>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <div className="flex items-center mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mr-2">Your Rating:</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 cursor-pointer ${
                          i < displayRating ? 'text-orange-700' : 'text-gray-300 dark:text-gray-500'
                        }`}
                        onMouseEnter={() => handleStarHover(i + 1)}
                        onMouseLeave={handleStarLeave}
                        onClick={() => handleStarClick(i + 1)}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="review" className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">
                    Your Review:
                  </label>
                  <textarea
                    id="review"
                    rows={4}
                    className="w-full text-sm border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-white dark:bg-gray-700 text-black dark:text-white"
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    placeholder="Write your review here..."
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveReview}
                    disabled={isLoading}
                    className="cursor-pointer px-4 py-2 text-sm bg-orange-700 text-white rounded-md hover:bg-orange-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Saving...' : 'Save Review'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;