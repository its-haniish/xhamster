import React, { useEffect, useState, useCallback } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import { Loading } from '../components/Loading';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { isAuth } = useSelector(state => state.auth);
    const navigate = useNavigate();




    const handleDeleteCategory = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/delete-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const result = await response.json();
            if (result.message !== 'Category deleted successfully') {
                toast.error(result.message, { duration: 2000 });
                return;
            }

            setCategories(categories.filter(creator => creator._id !== id));
            toast.success("Deleted Successfully", { duration: 1500 });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { duration: 1500 });
        }
    };

    const onSave = async (name) => {
        try {
            console.log('Received request to create category:', name);

            setIsPopupOpen(false);
            setIsLoading(true);

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/create-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            let result = await response.json();
            if (result.message !== 'Category created successfully') {
                toast.error(result.message, { duration: 2000 });
                return setIsLoading(false);
            }
            setCategories([{ _id: result.data._id, name: result.data.name }, ...categories]);
            toast.success(result.message, { duration: 1500 });
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { duration: 1500 });
            setIsLoading(false)
        }
    }

    const getCategories = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let result = await response.json();
            if (result.message !== 'Categories fetched successfully') {
                toast.error(result.message, { duration: 2000 });
                return setIsLoading(false);
            }
            setCategories(result.data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { duration: 1500 });
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        } else {
            getCategories();
        }
    }, [])

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl font-bold">Manage Category</h1>
                    <button
                        onClick={(() => setIsPopupOpen(true))}
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
                </div>
            </div>
            {isPopupOpen && (
                <Popup
                    title='Category'
                    onClose={() => setIsPopupOpen(false)}
                    onSave={onSave}
                />
            )}
        </>
    );
};

export default Categories;
