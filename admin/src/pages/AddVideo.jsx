import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import ReactPlayer from "react-player"

const AddVideo = () => {
    const [formData, setFormData] = useState({
        title: '',
        videoUrl: '',
        category: '',
        creator: '',
        description: '',
        slug: ''
    });
    const [creators, setCreators] = useState([
        { _d: '1', name: 'Creator 1' },
        { _d: '2', name: 'Creator 2' },
        { _d: '3', name: 'Creator 3' },
        { _d: '4', name: 'Creator 4' },
        { _d: '5', name: 'Creator 5' },
        { _d: '6', name: 'Creator 6' },
        { _d: '7', name: 'Creator 7' },
        { _d: '8', name: 'Creator 8' },
    ]);
    const [categories, setCategories] = useState([
        { _id: '1', name: 'Category 1' },
        { _id: '2', name: 'Category 2' },
        { _id: '3', name: 'Category 3' },
        { _id: '4', name: 'Category 4' },
        { _id: '5', name: 'Category 5' },
        { _id: '6', name: 'Category 6' },
        { _id: '7', name: 'Category 7' },
        { _id: '8', name: 'Category 8' },
        { _id: '9', name: 'Category 9' },
        { _id: '10', name: 'Category 10' },
    ]);
    const [videoPreview, setVideoPreview] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { isAuthenticated, token } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
                setVideoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.success('Video added successfully');

    };

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Add Video</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                id="name"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Slug</label>
                            <input
                                type="text"
                                id="name"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Choose video</label>
                            <input
                                type="file"
                                name='video'
                                onChange={handleVideoChange}
                                className="mt-1"
                            />
                            {videoPreview && (
                                <div className="mt-4">
                                    <ReactPlayer fallback url={videoPreview} controls className="w-32 h-32 object-cover rounded-md" />
                                </div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            >
                                <option value="">Select a Category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                            <select
                                name="creator"
                                value={formData.creator}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            >
                                <option value="">Select a Brand</option>
                                {creators.map((brand, index) => (
                                    <option key={index} value={brand.name}>{brand.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
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
