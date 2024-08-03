import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup'; // Reusing the Popup component
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { toast } from 'sonner';

const Creators = () => {
    const [creators, setCreators] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { isAuth } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleDeleteCreator = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/delete-creator`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const result = await response.json();
            if (result.message !== 'Creator deleted successfully') {
                toast.error(result.message, { duration: 2000 });
                return;
            }

            setCreators(creators.filter(creator => creator._id !== id));
            toast.success("Deleted Successfully", { duration: 1500 });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { duration: 1500 });
        }
    };

    const onSave = async (name) => {
        try {
            console.log('Received request to create creator:', name);

            setIsPopupOpen(false);
            setIsLoading(true);

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/create-creator`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            let result = await response.json();
            if (result.message !== 'Creator created successfully') {
                toast.error(result.message, { duration: 2000 });
                return setIsLoading(false);
            }
            setCreators([{ _id: result.data._id, name: result.data.name }, ...creators]);
            toast.success(result.message, { duration: 1500 });
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { duration: 1500 });
            setIsLoading(false);
        }
    };

    const getCreators = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get-creators`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let result = await response.json();
            if (result.message !== 'Creators fetched successfully') {
                toast.error(result.message, { duration: 2000 });
                return setIsLoading(false);
            }
            setCreators(result.data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { duration: 1500 });
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        } else {
            getCreators();
        }
    }, [isAuth, navigate]);

    return (
        <>
            <Navbar />
            {isLoading && <Loading />}
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl font-bold">Manage Creators</h1>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="px-2 py-1 bg-blue-600 flex justify-center items-center text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        <FaPlus className="inline mr-2" /> Add Creator
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <ul className="space-y-4">
                        {creators.map((creator) => (
                            <li key={creator._id} className="flex flex-col md:flex-row items-start md:items-center p-4 border border-gray-300 rounded-md">
                                <div className="flex-1 md:ml-4">
                                    <h2 className="text-lg font-semibold text-gray-900">{creator.name}</h2>
                                    <div className="flex mt-4 space-x-2">
                                        <button
                                            onClick={() => handleDeleteCreator(creator._id)}
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
                    title='Creator'
                    onClose={() => setIsPopupOpen(false)}
                    onSave={onSave}
                />
            )}
        </>
    );
};

export default Creators;
