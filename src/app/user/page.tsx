"use client";

import { useTheme } from "@/context/ThemeContext";

export default function User() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="bg-base border border-base text-base backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
            style={{ backgroundColor: 'var(--switch-bg)' }}
            role="switch"
            aria-checked={darkMode}
          >
            <span className="sr-only">Toggle dark mode</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="ml-3 text-sm font-medium">Try Dark Mode</span>
        </div>
        <h2 className="text-2xl font-semibold" style={{ color: 'var(--card-heading)' }}>
          Your reviews
        </h2>
      </div>

      <div className="space-y-4">
        <div
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
                  src="https://www.thecommononline.org/wp-content/uploads/2013/06/Screen-Shot-2017-05-31-at-2.19.46-PM.png"
                  alt="The Great Gatsby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-md font-bold" style={{ color: 'var(--card-heading)' }}>
                  The Great Gatsby
                </h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      style={{
                        color: i < 4 ? '#c2410c' : 'var(--star-empty)',
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
                Reviewed on 2023-11-15
              </div>
              <p className="text-sm line-clamp-2" style={{ color: 'var(--card-body)' }}>
                Your review text would appear here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
