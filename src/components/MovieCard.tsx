import React from 'react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, rating }) => {
  return (
    <div className="w-[200px] shadow-sm text-left">
      <a href="#">
        <img
          className="rounded-lg w-[200px] h-[300px] object-cover"
          src={imageUrl}
          alt={`Cover of ${title}`}
        />
      </a>
      <div className="px-3 pb-3 pt-2">
        <a href="#">
          <h5 className="text-base font-semibold tracking-tight text-black line-clamp-2 mb-1">
            {title}
          </h5>
        </a>

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
          <span className="text-xs font-medium text-gray-700 mt-[-2px]">Watch later</span>
          <button className="group relative p-1">
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
    </div>
  );
};

export default MovieCard;
