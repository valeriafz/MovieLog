'use client';

import { useState } from 'react';
import { UserCircle, X, Menu } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const router = useRouter();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    setShowLogoutModal(false);
    logout(); 
    router.push('/auth/login');
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <nav className="bg-base text-base border border-white/50 backdrop-blur-md shadow-lg relative z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="ml-3 font-bold text-2xl">MovieLog</Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium">Try Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
                  style={{ backgroundColor: 'var(--switch-bg)' }}
                  role="switch"
                  aria-checked={darkMode}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <Link href="/" className="hover:text-orange-700 px-2 py-1">Home</Link>
              <Link href="/add" className="hover:text-orange-700 px-2 py-1">Add Movie</Link>
              <Link href="/user" className="hover:text-orange-700 px-2 py-1">Your Reviews</Link>

              <div className="relative">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center hover:text-orange-700 px-2 py-1 cursor-pointer"
                >
                  <UserCircle className="mr-1" size={20} />
                  <span>User</span>
                </button>

                {isUserDropdownOpen && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg absolute right-0 mt-2 w-32 shadow-lg z-50">
                    <div
                      className="block px-4 py-2 text-sm cursor-pointer hover:font-semibold"
                      style={{ color: 'var(--card-body)' }}
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        setShowLogoutModal(true);
                      }}
                    >
                      Log out
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-base hover:text-white hover:bg-orange-700"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="text-base block px-3 py-2 hover:font-semibold">Home</Link>
            <Link href="/add" className="text-base block px-3 py-2 hover:font-semibold">Add Movie</Link>
            <Link href="/user" className="text-base block px-3 py-2 hover:font-semibold">Your Reviews</Link>
            <button
              onClick={() => {
                setIsUserDropdownOpen(false);
                setShowLogoutModal(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:font-semibold cursor-pointer"
            >
              Log Out
            </button>
          </div>
        )}
      </nav>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl max-w-sm w-full transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fadeInScale">
              <h2 className="text-base flex justify-center text-lg font-semibold mb-4">
                Are you sure you want to log out?
              </h2>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded"
                >
                  Log Out
                </button>
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInScale {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
