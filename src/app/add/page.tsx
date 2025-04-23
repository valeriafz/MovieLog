"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Add() {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Image
        src="/bckg.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="-z-10"
      />
     
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="flex flex-col items-center mr-4 lg:mr-8">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/50 p-4 mb-4 hover:bg-white/30 transition-all cursor-pointer group">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/50 p-4 mb-4 hover:bg-white/30 transition-all cursor-pointer group">
            <a href="/add">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </a>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/50 p-4 hover:bg-white/30 transition-all cursor-pointer group">
            <a href="/user">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl p-8 md:p-10 z-10 mx-auto">
            <h2 className="text-2xl font-semibold text-center text-black mb-6">Add new movie to watchlist</h2>

            <form className="space-y-6">
              <div className="flex flex-col items-center">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2 w-full max-w-md text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full max-w-md bg-white/20 backdrop-blur-sm border border-white/60 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-white/70"
                  placeholder="Enter movie name"
                />
              </div>

              <div className="flex flex-col items-center">
                <label htmlFor="picture" className="block text-sm font-medium text-white mb-2 w-full max-w-md text-left">
                  Picture URL
                </label>
                <input
                  type="text"
                  id="picture"
                  name="picture"
                  className="w-full max-w-md bg-white/20 backdrop-blur-sm border border-white/60 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-white/70 mb-3"
                  placeholder="Enter image URL"
                />
                
                <div className="w-full max-w-md flex items-center justify-between">
                  <label 
                    htmlFor="file-upload" 
                    className="flex items-center gap-2 text-sm text-black cursor-pointer transition-colors"
                    onClick={() => setIsUploading(true)}
                  >
                    <span>Or Upload from device</span>
                    <div className={`relative p-1 rounded-full transition-all ${isUploading ? 'bg-white' : ''}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-colors ${isUploading ? 'text-orange-700' : 'text-black'}`}
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
                <label htmlFor="rating" className="block text-sm font-medium text-white mb-2 w-full max-w-md text-left">
                  Rating (You can skip if you haven't watched it yet)
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  className="w-full max-w-md bg-white/20 backdrop-blur-sm border border-white/60 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-white/70"
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
        </div>
      </div>
    </div>
  );
}