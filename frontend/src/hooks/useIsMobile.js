import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Function to check if the device is mobile or desktop
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', checkIsMobile);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return isMobile;
};

export default useIsMobile;
