import React, { Suspense, lazy } from 'react';
import useIsMobile from '../hooks/useIsMobile'; // Hook to check if the device is mobile or desktop
import { useNavigate } from 'react-router-dom';
const LazyImage = lazy(() => import('./LazyImage')); // Lazy-loaded image component

const VideoCard = ({ thumbnailUrl, length, slug }) => {
    // Function to format the video length into minutes and seconds
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <section onClick={() => navigate(`/play/${slug}`)} className={`${isMobile ? 'w-[48%]' : 'w-[20%]'} aspect-square bg-none relative border-none mt-2 cursor-pointer z-0`}>
            <div className='w-full bg-cover bg-center relative aspect-square rounded-md'>
                <Suspense fallback={<div className="bg-none w-full h-full rounded-md" />}>
                    <LazyImage src={thumbnailUrl} alt="Video Thumbnail" />
                </Suspense>
                {/* Display the video length in the bottom-right corner */}
                <p className='text-white absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-md text-sm'>
                    {formatDuration(length)}
                </p>
            </div>
            <h2 className='text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                This is the best video in the whole universe
            </h2>
            <h3 className='text-slate-500 font-medium text-sm'>5M views</h3>
        </section>
    );
};

export default VideoCard;
