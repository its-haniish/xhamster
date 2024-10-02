import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoCard = ({ url }) => {
    const [duration, setDuration] = useState(0);

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <section className='w-[45%] aspect-square bg-slate-100 relative border-none'>
            <div className='w-full bg-cover bg-center relative aspect-square'>
                <ReactPlayer
                    url={"/song.mp4"}
                    width='100%'
                    height='100%'
                    onDuration={handleDuration}
                    light={true}  // This ensures that the video is not played, but a preview image is shown
                    controls={false} // Hides video controls
                    playing={false}  // Does not autoplay
                />
                <p className='text-white absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-md text-sm'>
                    {formatDuration(duration)}
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
