"use client";

import { useState } from 'react';

export default function Add() {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="bg-base border border-base text-base backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 z-10">
        <h2 className="text-2xl font-semibold text-center mb-8" style={{ color: 'var(--card-heading)' }}>
          Add new movie to watchlist
        </h2>

      <form className="space-y-6">
        <div className="flex flex-col items-center">
          <label htmlFor="name" className="block text-sm font-medium w-full max-w-md text-left text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 "
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-base)',
            }}
            placeholder="Enter movie name"
          />
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="picture" className="block text-sm font-medium w-full max-w-md text-white text-left">
            Picture URL
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-base)',
        
            }}
            placeholder="Enter image URL"
          />

          <div className="w-full max-w-md flex items-center justify-between">
            <label
              htmlFor="file-upload"
              className="flex items-center gap-2 text-sm cursor-pointer transition-colors"
              style={{ color: 'var(--text-base)' }}
              onClick={() => setIsUploading(true)}
            >
              <span>Or Upload from device</span>
              <div className={`relative p-1 rounded-full transition-all ${isUploading ? 'bg-white' : ''}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-colors ${isUploading ? 'text-orange-700' : ''}`}
                  style={{ color: isUploading ? '#c2410c' : 'var(--icon-color)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            </label>
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              className="hidden"
              onChange={() => setIsUploading(false)}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="rating" className="block text-sm font-medium w-full max-w-md text-left text-white -mt-2">
            Rating (You can skip if you haven't watched it yet)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            className="w-full max-w-md backdrop-blur-sm border rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-base)',
            }}
            placeholder="Enter rating 1-5"
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="w-1/2 max-w-md bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 px-6 rounded-3xl transition-all shadow-lg"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
}