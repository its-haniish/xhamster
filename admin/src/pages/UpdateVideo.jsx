import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const UpdateVideo = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        creator: '',
        description: '',
        slug: '',
    });
    const [creators, setCreators] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isAuth } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const { slug } = useParams();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/update-video`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: formData._id,
                    title: formData.title,
                    category: formData.category,
                    creator: formData.creator,
                    description: formData.description,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success('Video updated successfully');
                navigate('/all-videos'); // Redirect after successful update
            } else {
                toast.error(result.message || 'Failed to update video');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const getVideoDetails = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/video-by-slug`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slug }),
            });

            const result = await response.json();
            if (response.ok) {
                setFormData({
                    _id: result.data._id,
                    title: result.data.title,
                    category: result.data.category,
                    creator: result.data.creator,
                    description: result.data.description,
                    slug: result.data.slug,
                });
            } else {
                toast.error(result.message || 'Failed to fetch video details');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const getCreators = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-creators`, {
                method: 'POST',
            });

            const result = await response.json();
            if (response.ok) {
                setCreators(result.data);
            } else {
                toast.error(result.message || 'Failed to fetch creators');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    const getCategories = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-categories`, {
                method: 'POST',
            });

            const result = await response.json();
            if (response.ok) {
                setCategories(result.data);
            } else {
                toast.error(result.message || 'Failed to fetch categories');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        } else {
            getVideoDetails();
            getCreators();
            getCategories();
        }
    }, [isAuth, navigate, slug]);

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Update Video</h1>
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
                                readOnly
                                onClick={() => toast.info("Slug can't be updated")}
                                className="w-full px-3 py-2 mt-1 text-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                            />
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
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateVideo;
