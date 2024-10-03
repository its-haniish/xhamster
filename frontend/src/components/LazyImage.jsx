import React from 'react';

const LazyImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className='w-full h-full object-cover'
            loading="lazy" // Enables native lazy loading for the image
        />
    );
};

export default LazyImage;
