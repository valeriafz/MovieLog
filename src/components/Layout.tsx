"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const isAuthPage = pathname === '/auth/login' || pathname === '/auth/register';

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="flex flex-col items-center mr-4 lg:mr-8">
          {!isAuthPage && (
            <Link href="/">
              <div
                className={clsx(
                  "bg-base border border-white/50 backdrop-blur-md rounded-2xl p-4 mb-4 transition-all cursor-pointer group",
                  pathname === "/" ? "text-white bg-white/30" : "hover:text-white hover:bg-white/30"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h7v7H3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7h-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 14h7v7h-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14h7v7H3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 7L7 7" />
                  <circle cx="17.5" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </Link>
          )}

          {!isAuthPage && (
            <Link href="/add">
              <div
                className={clsx(
                  "bg-base border border-white/50 backdrop-blur-md rounded-2xl p-4 mb-4 transition-all cursor-pointer group",
                  pathname === "/add" ? "text-white bg-white/30" : "hover:text-white hover:bg-white/30"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </Link>
          )}

          
          {!isAuthPage && (
            <Link href="/user">
              <div
                className={clsx(
                  "bg-base border border-white/50 backdrop-blur-md rounded-2xl p-4 transition-all cursor-pointer group",
                  pathname === "/user" ? "text-white bg-white/30" : "hover:text-white hover:bg-white/30"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h5m-1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </Link>
          )}
        </div>

        <div className="flex-1 max-w-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
