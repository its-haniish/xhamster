import React, { useEffect, useState, useCallback } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ManageCreatorsPopup from '../components/ManageCreatorsPopup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';

import { toast } from 'sonner';

const Creators = () => {
    const [brands, setBrands] = useState([
        { _d: '1', name: 'Creator 1' },
        { _d: '2', name: 'Creator 2' },
        { _d: '3', name: 'Creator 3' },
        { _d: '4', name: 'Creator 4' },
        { _d: '5', name: 'Creator 5' },
        { _d: '6', name: 'Creator 6' },
        { _d: '7', name: 'Creator 7' },
        { _d: '8', name: 'Creator 8' },
    ]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const { isAuthenticated, token } = useSelector(state => state.auth);
    const navigate = useNavigate();



    const handleDeleteBrand = async (id) => {
        toast.success("Deleted Successfully", { duration: 1500 });
    };

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
                        {brands.map((brand) => (
                            <li key={brand._d} className="flex flex-col md:flex-row items-start md:items-center p-4 border border-gray-300 rounded-md">

                                <div className="flex-1 md:ml-4">
                                    <h2 className="text-lg font-semibold text-gray-900">{brand.name}</h2>
                                    <div className="flex mt-4 space-x-2">
                                        <button
                                            onClick={() => handleDeleteBrand(brand._id)}
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
                <ManageCreatorsPopup
                    onClose={() => setIsPopupOpen(false)}
                />
            )}
        </>
    );
};

export default Creators;
