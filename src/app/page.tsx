import Layout from '@/components/Layout';
import MovieCard from '@/components/MovieCard';

export default function Home() {
  return (
    <Layout>
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
        <MovieCard
          title="The Great Gatsby"
          imageUrl="/bckg.jpg"
          rating={4}
        />
      </div>
    </Layout>
  );
}