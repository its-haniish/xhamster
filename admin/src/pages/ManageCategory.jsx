import React, { useEffect, useState, useCallback } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ManageCategoryPopup from '../components/ManageCategoryPopup';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadingMore from '../components/LoadingMore';
import { toast } from "sonner";

const ManageCategory = () => {
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
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const { isAuthenticated, token } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleAddCategory = () => {
        setSelectedCategory(null);
        setIsPopupOpen(true);
    };

    const fetchAllCategories = useCallback(async () => {
        if (isLoading || isMoreLoading || !hasMore) return;

        if (page === 1) {
            setIsLoading(true);
        } else {
            setIsMoreLoading(true);
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/fetch-all-categories`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ page })
            });

            const result = await response.json();

            if (result?.message === 'Categories fetched successfully') {
                setCategories(prevCategories => [...prevCategories, ...result.data]);
                if (result.data.length < 5) {
                    setHasMore(false);
                } else {
                    setPage(prevPage => prevPage + 1);
                }
            } else {
                alert('Failed to fetch categories');
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            alert('Failed to fetch categories');
        } finally {
            setIsLoading(false);
            setIsMoreLoading(false);
        }
    }, [page, token, isLoading, isMoreLoading, hasMore]);


    const handleDeleteCategory = async (id) => {
        toast.success("Deleted Successfully", { duration: 1500 });
    };

    const handleScroll = useCallback(() => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom && hasMore && !isMoreLoading && !isLoading) {
            fetchAllCategories();
        }
    }, [hasMore, isMoreLoading, isLoading, fetchAllCategories]);

    useEffect(() => {
        // if (!isAuthenticated) {
        //     navigate('/');
        // } else {
        //     fetchAllCategories();
        //     window.addEventListener('scroll', handleScroll);
        // }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAuthenticated, navigate, fetchAllCategories, handleScroll]);

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl font-bold">Manage Category</h1>
                    <button
                        onClick={handleAddCategory}
                        className="px-2 py-1 bg-blue-600 flex justify-center items-center text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        <FaPlus className="inline mr-2" /> Add Category
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <ul className="space-y-4">
                        {categories.map((category) => (
                            <li key={category._id} className="flex flex-col md:flex-row items-start md:items-center p-4 border border-gray-300 rounded-md">
                                <div className="flex-1 md:ml-4">
                                    <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                                    <div className="flex mt-4 space-x-2">
                                        <button
                                            onClick={() => handleDeleteCategory(category._id)}
                                            className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
                                        >
                                            <FaTrash className="inline mr-1" /> Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {isMoreLoading && hasMore && <LoadingMore />}
                </div>
            </div>
            {isPopupOpen && (
                <ManageCategoryPopup
                    onClose={() => setIsPopupOpen(false)}
                />
            )}
        </>
    );
};

export default ManageCategory;
