import BookCard from '@/components/bookCard';
import Image from 'next/image';

export default function Home() {
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
     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl relative flex">
          <div className="flex flex-col items-center mr-4">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/50 p-4 mb-4 hover:bg-white/30 transition-all cursor-pointer group">
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
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/50 p-4 mb-4 hover:bg-white/30 transition-all cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/50 p-4 hover:bg-white/30 transition-all cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto w-1/2 -mb-4 z-20"> 
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/60 rounded-3xl py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl p-6 md:p-8 z-10">
            <BookCard 
  title="The Great Gatsby" 
  imageUrl="/bckg.jpg" 
  rating={4.5} 
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}