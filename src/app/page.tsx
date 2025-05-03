"use client";

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Watchlist from '@/components/Watchlist';

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { darkMode } = useTheme();

  const filters = [
    { label: 'Watch later', value: 'watch-later' },
    { label: 'Completed', value: 'completed' },
    { label: 'Higher reviewed', value: 'higher-reviewed' },
    { label: 'Lower reviewed', value: 'lower-reviewed' }
  ];

  return (
    <>
      <div className="relative mx-auto w-3/4 -mb-4 z-20"> 
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className={`w-full bg-base backdrop-blur-sm border border-base rounded-3xl py-3 px-5 pl-12 focus:outline-none focus:ring-2 ${
              darkMode ? 'focus:ring-white/40' : 'focus:ring-gray-400'
            }`}
            style={{ color: 'var(--text-base)' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--text-base)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{ color: 'var(--text-base)' }}
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </div>
          
          {showFilters && (
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg absolute right-0 mt-2 w-48 shadow-lg z-50"
            >
              <div className="py-1">
                {filters.map((filter) => (
                  <div
                    key={filter.value}
                    className={`block px-4 py-2 text-xs cursor-pointer ${
                      activeFilter === filter.value 
                        ? 'font-semibold' 
                        : 'hover:font-semibold'
                    }`}
                    style={{
                      color: 'var(--card-body)',
                      backgroundColor: activeFilter === filter.value ? 'var(--card-border)' : 'transparent'
                    }}
                    onClick={() => {
                      setActiveFilter(filter.value);
                      setShowFilters(false);
                    }}
                  >
                    {filter.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-base border border-base text-base backdrop-blur-md rounded-3xl border shadow-xl p-6 md:p-8 z-10">
        <Watchlist searchQuery={searchQuery} activeFilter={activeFilter} />
      </div>
    </>
  );
}