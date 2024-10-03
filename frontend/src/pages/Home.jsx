import React from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);

  return (
    <main className={`w-full h-full bg-[#292828] ${isSidebarOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
      <Navbar />

      <section>
        <div className='w-full flex justify-between p-1'>
          <h1 className='text-white text-xl font-semibold'>Trending Free Porn Videos</h1>
          <select className='bg-[#292828] rounded-md px-2 py-1 text-white focus:outline-none w-[30vw] font-medium'>
            <option value="desending_time" className='text-sm'>Trending</option>
            <option value="desending_time" className='text-sm'>Most Liked</option>
            <option value="revelence" className='text-sm'>Relevance</option>
            <option value="asending_time" className='text-sm'>Latest</option>
            <option value="desending_time" className='text-sm'>Old is Gold</option>
          </select>
        </div>
      </section>

      {/* Line */}
      <hr className='border-t-2 border-[#292828]' />

      {/* Videos */}
      <section className='flex flex-wrap justify-evenly gap-1 px-1 pt-2 pb-9 z-0'>
        {/* Sample VideoCards */}
        {[...Array(8)].map((_, index) => (
          <VideoCard
            slug={`video_${index + 1}`}
            key={index}
            thumbnailUrl="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg"
            length={10 * index + 299} // length in seconds
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
