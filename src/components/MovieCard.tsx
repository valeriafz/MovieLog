"use client"

import React, { useState, useRef, useEffect } from 'react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  status: 'Completed' | 'Watch later';
  review?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  title, 
  imageUrl, 
  rating, 
  status, 
  review = '' 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(status === 'Completed' ? rating : 0);
  const [userReview, setUserReview] = useState(review);
  const [hoveredRating, setHoveredRating] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStarClick = (selectedRating: number) => {
    if (status === 'Watch later') {
      setUserRating(selectedRating);
    }
  };

  const handleStarHover = (hoverRating: number) => {
    if (status === 'Watch later') {
      setHoveredRating(hoverRating);
    }
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSaveReview = () => {
    console.log('Saving review:', { title, userRating, userReview });
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const displayRating = hoveredRating > 0 ? hoveredRating : userRating;

  return (
    <div className="w-48 shadow-sm text-left relative">
      <div onClick={handleOpenModal} className="cursor-pointer">
        <img
          className="rounded-lg w-48 h-64 object-cover"
          src={imageUrl}
          alt={`Cover of ${title}`}
        />
      </div>
      <div className="px-3 pb-3 pt-2">
        <div onClick={handleOpenModal} className="cursor-pointer">
          <h5 className="text-base font-semibold tracking-tight text-black line-clamp-2 mb-1">
            {title}
          </h5>
        </div>
        <div className="flex items-center text-current mb-1">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-orange-700' : 'text-gray-500 dark:text-gray-700'}`}
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
          <span className="text-xs font-medium text-gray-700 mt-0">
            {status}
          </span>
          <button 
            className="group relative p-1"
            onClick={handleOpenModal}
          >
            <div className="transition-all duration-200 w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-white group-active:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black group-hover:text-orange-700 group-active:text-orange-700 transition-colors duration-200"
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
        <div 
          ref={modalRef}
          className="absolute top-full left-0 z-10 mt-2 bg-white rounded-lg shadow-lg p-4 border border-gray-200 w-64"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold truncate max-w-full">{title}</h3>
            <button 
              onClick={handleCloseModal}
              className="text-gray-500 hover:text-black"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {status === 'Completed' ? (
            <div>
              <div className="flex items-center mb-2">
                <p className="text-sm text-gray-600 mr-2">Rating:</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < rating ? 'text-orange-700' : 'text-gray-300'}`}
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
              <div>
                <p className="text-xs mb-1 font-medium">Review:</p>
                <p className="text-sm text-gray-700">{review || 'No review available.'}</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center mb-3">
                <p className="text-sm text-gray-600 mr-2">Your Rating:</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 cursor-pointer ${
                        i < displayRating ? 'text-orange-700' : 'text-gray-300'
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
              <div className="mb-3">
                <label htmlFor="review" className="block text-xs font-medium mb-1">
                  Your Review:
                </label>
                <textarea
                  id="review"
                  rows={3}
                  className="w-full text-sm border border-gray-300 rounded-md p-2"
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                  placeholder="Write your review here..."
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSaveReview}
                  className="px-3 py-1 text-sm bg-orange-700 text-white rounded-md hover:bg-orange-800"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieCard;