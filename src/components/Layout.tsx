import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
