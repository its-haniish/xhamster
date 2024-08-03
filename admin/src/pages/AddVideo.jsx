import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ReactPlayer from 'react-player';

const AddVideo = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        creator: '',
        description: '',
        slug: '',
    });
    const [video, setVideo] = useState(null);
    const [creators, setCreators] = useState([]);
    const [categories, setCategories] = useState([]);
    const [videoPreview, setVideoPreview] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setVideo(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setVideoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!video) {
            toast.error('Please upload a video', { duration: 2000 });
            return;
        }

        setIsLoading(true);

        const formDataObj = new FormData();
        formDataObj.append('title', formData.title);
        formDataObj.append('category', formData.category);
        formDataObj.append('creator', formData.creator);
        formDataObj.append('description', formData.description);
        formDataObj.append('slug', formData.slug);
        formDataObj.append('video', video);

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/upload`, {
                method: 'POST',
                body: formDataObj, // Do not set Content-Type to allow FormData handling
            });

            const result = await response.json();
            if (result.message !== 'Video uploaded successfully') {
                toast.error(result.message, { duration: 2000 });
                return setIsLoading(false);
            }
            toast.success(result.message, { duration: 1500 });
            setFormData({
                title: '',
                category: '',
                creator: '',
                description: '',
                slug: '',
            });
            setVideo(null);
            setVideoPreview('');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', { duration: 1500 });
        } finally {
            setIsLoading(false);
        }
    };

    const getCreators = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-creators`, {
                method: 'POST', // Changed to GET
            });

            const result = await response.json();
            if (result.message !== 'Creators fetched successfully') {
                toast.error(result.message, { duration: 2000 });
                return;
            }
            setCreators(result.data);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', { duration: 1500 });
        } finally {
            setIsLoading(false);
        }
    };

    const getCategories = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-categories`, {
                method: 'POST', // Changed to GET
            });

            const result = await response.json();
            if (result.message !== 'Categories fetched successfully') {
                toast.error(result.message, { duration: 2000 });
                return;
            }
            setCategories(result.data);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', { duration: 1500 });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        } else {
            getCreators();
            getCategories();
        }
    }, [isAuth, navigate]);

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Add Video</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                                Slug
                            </label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="video" className="block text-sm font-medium text-gray-700">
                                Choose video
                            </label>
                            <input type="file" name="video" onChange={handleVideoChange} className="mt-1" />
                            {videoPreview && (
                                <div className="mt-4">
                                    <ReactPlayer url={videoPreview} controls className="w-32 h-32 object-cover rounded-md" />
                                </div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            >
                                <option value="">Select a Category</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat.name}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="creator" className="block text-sm font-medium text-gray-700">
                                Creator
                            </label>
                            <select
                                name="creator"
                                value={formData.creator}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            >
                                <option value="">Select a Creator</option>
                                {creators.map((creator) => (
                                    <option key={creator._id} value={creator.name}>
                                        {creator.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddVideo;
