"use client";

import Layout from '@/components/Layout';
import MovieCard from '@/components/MovieCard';
import { useState } from 'react';

export default function User() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout>
      <div className={`${darkMode ? 'bg-gray-900/80 border-gray-700/50 text-white' : 'bg-white/20 border-white/50 text-black'} backdrop-blur-md rounded-3xl border shadow-xl p-6 md:p-8 z-10`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'bg-orange-700' : 'bg-gray-200'}`}
              role="switch"
              aria-checked={darkMode}
            >
              <span className="sr-only">Toggle dark mode</span>
              <span
                className={`${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <span className="ml-3 text-sm font-medium">Try Dark Mode</span>
          </div>
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Your reviews</h2>
        </div>
        
        <div className="space-y-4"> 
          <div className={`${darkMode ? 'bg-gray-800/50 border-gray-700/40' : 'bg-white/30 border-white/40'} backdrop-blur-sm rounded-xl border p-4`}>
            <div className="flex gap-4 items-start"> 
              <div className="w-16 flex-shrink-0"> 
                <div className="aspect-[2/3] rounded-lg overflow-hidden">
                  <img 
                    src="/bckg.jpg" 
                    alt="The Great Gatsby" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-1"> 
                <div className="flex justify-between items-start">
                  <h3 className={`text-md font-bold ${darkMode ? 'text-white' : 'text-black'}`}>The Great Gatsby</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-orange-700' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Reviewed on 2023-11-15</div> 
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-800'} line-clamp-2`}>Your review text would appear here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}