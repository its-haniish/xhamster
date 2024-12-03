import React from 'react';

const LazyImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className='w-full h-fit object-conatin rounded-md fliter blur-sm'
            loading="lazy" // Enables native lazy loading for the image
        />
    );
};

export default LazyImage;
