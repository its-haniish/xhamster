import React, { useState, useEffect, useCallback } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons from react-icons
import Navbar from '../components/Navbar';
import { Loading, LoadingMore } from '../components/Loading'; // Importing LoadingMore
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { toast } from 'sonner'; // Importing Sonner's toast

const AllVideos = () => {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const fetchAllVideos = useCallback(async () => {
        if (!hasMore || isLoading || isMoreLoading) return; // Prevent unnecessary calls

        page === 1 ? setIsLoading(true) : setIsMoreLoading(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/videos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    page,
                    sort: 'createdAt',
                    order: 'desc',
                    limit: 10,
                }),
            });

            const result = await response.json();

            if (result?.videos) {
                if (result.videos.length < 10) {
                    setHasMore(false); // If less than 10 videos, mark as no more data
                }

                setVideos((prevVideos) => {
                    const newVideoIds = result.videos.map((v) => v._id);
                    const existingVideoIds = prevVideos.map((v) => v._id);
                    const newVideos = result.videos.filter(
                        (video) => !existingVideoIds.includes(video._id)
                    );
                    return [...prevVideos, ...newVideos];
                });
                setPage((prevPage) => prevPage + 1);
            } else {
                console.log(result?.message);
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching videos:', error);
            toast.error('Failed to fetch videos');
        } finally {
            setIsLoading(false);
            setIsMoreLoading(false);
        }
    }, [page, isLoading, isMoreLoading, hasMore]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            fetchAllVideos();
        }
    }, [fetchAllVideos]);


    const handleDelete = async (videoId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this video?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/delete-video`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: videoId }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message);

                // Remove the deleted video from the videos state
                setVideos((prevVideos) => prevVideos.filter((video) => video._id !== videoId));
            } else {
                toast.error(result.message || 'Failed to delete video');
            }
        } catch (error) {
            console.error('Error deleting video:', error);
            toast.error('Error deleting video');
        }
    };

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        } else {
            fetchAllVideos();
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAuth, navigate, fetchAllVideos, handleScroll]);

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-4">All Videos</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    {videos.length === 0 && !isLoading ? (
                        <p>No videos found.</p>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {videos.map((video) => (
                                <li key={video._id} className="flex flex-col items-start bg-gray-50 rounded-md p-4 shadow-md">
                                    <ReactPlayer
                                        url={`${process.env.REACT_APP_BASE_URL}/uploads/${video.url}`}
                                        controls
                                        width="100%"
                                        height="200px"
                                        className="mb-4 rounded-md overflow-hidden"
                                    />
                                    <div className="flex-1">
                                        <p className="font-bold text-lg text-gray-900">{video.title}</p>
                                        <p className="text-sm text-gray-700 mt-2">{video.description}</p>
                                        <div className="flex space-x-4 mt-2 text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&${video.creator}`}
                                                    alt="Creator Avatar"
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <p className="text-sm">{video.creator}</p>
                                            </div>
                                            <p className="text-sm">{video.category}</p>
                                        </div>
                                        <div className="flex space-x-4 mt-2">
                                            <p className="text-sm text-gray-600">Views: {video.views}</p>
                                            <p className="text-sm text-gray-600">Likes: {video.likes.length}</p>
                                            <p className="text-sm text-gray-600">Comments: {video.comments.length}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 mt-4">
                                        <button
                                            className="flex items-center px-2 py-1 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-sm"
                                            onClick={() => navigate(`/edit-video/${video.slug}`)}
                                        >
                                            <FaEdit className="mr-2" /> Update Details
                                        </button>
                                        <button
                                            className="flex items-center px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                                            onClick={() => handleDelete(video._id)}
                                        >
                                            <FaTrash className="mr-2" /> Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {isMoreLoading && hasMore && <LoadingMore />}
            </div>
        </>
    );
};

export default AllVideos;
