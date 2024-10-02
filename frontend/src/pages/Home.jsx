import React from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';

const App = () => {
  return (
    <main>
      <Navbar />

      <section>
        <div className='w-full flex justify-between p-1'>
          <h1 className='text-white text-xl font-semibold'>Trending Free Porn Videos</h1>
          <select className='bg-[#292828]  rounded-md px-2 py-1 text-white focus: outline-none w-[30vw] font-medium'>
            <option value="desending_time" className='text-sm'>Trending </option>
            <option value="desending_time" className='text-sm' >Most Liked</option>
            <option value="revelence" className='text-sm'>Revelence</option>
            <option value="asending_time" className='text-sm'>Latest </option>
            <option value="desending_time" className='text-sm'>Old is Gold</option>
          </select>
        </div>
      </section>


      {/* Line */}
      <hr className='border-t-2 border-[#292828]' />

      {/* videos */}
      <section className='flex flex-wrap justify-evenly gap-1 px-1 pt-2 pb-9'>
        <VideoCard url="http://localhost:8080/uploads/hawayein.mp4" />
        <VideoCard url="http://localhost:8080/uploads/hawayein.mp4" />
        <VideoCard url="http://localhost:8080/uploads/hawayein.mp4" />
        <VideoCard url="http://localhost:8080/uploads/hawayein.mp4" />
        <VideoCard url="http://localhost:8080/uploads/hawayein.mp4" />
      </section>


    </main>
  );
};

export default App;
