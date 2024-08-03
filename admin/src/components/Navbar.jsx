import React, { useState } from 'react';
import { FaCreativeCommons, FaPlus, FaProductHunt, FaTags, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeCookie } from '../utils/cookies';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleLogout = () => {
        dispatch({ type: 'logout' });
        removeCookie('xHamsterAdmin');
        navigate('/login');
    };
    return (
        <nav className="bg-white text-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start">
                        <div className="flex-shrink-0">
                            <NavLink to="/" className="text-2xl font-bold text-gray-900">
                                xHamster
                            </NavLink>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                        <NavLink
                            to="/add-video"
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        >
                            <FaPlus className="mr-2" />
                            Add Video
                        </NavLink>
                        <NavLink
                            to="/all-videos"
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        >
                            <FaProductHunt className="mr-2" />
                            All Videos
                        </NavLink>

                        <NavLink
                            to="/categories"
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        >
                            <FaTags className="mr-2" />
                            Categories
                        </NavLink>

                        <NavLink
                            to="/creators"
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        >
                            <FaCreativeCommons className="mr-2" />
                            Creators
                        </NavLink>

                        <button
                            onClick={handleLogout}
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        >
                            <FaSignOutAlt className="mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu open state */}
            <div
                className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                id="mobile-menu"
            >
                <div className="space-y-1 px-2 pt-2 pb-3 bg-white">

                    <NavLink
                        to="/add-video"
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <FaPlus className="mr-2" />
                        Add Video
                    </NavLink>

                    <NavLink
                        to="/all-videos"
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <FaProductHunt className="mr-2" />
                        All Videos
                    </NavLink>

                    <NavLink
                        to="/categories"
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <FaTags className="mr-2" />
                        Categories
                    </NavLink>

                    <NavLink
                        to="/creators"
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <FaCreativeCommons className="mr-2" />
                        Creators
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className="text-gray-900 hover:bg-gray-200 hover:text-gray-700  px-3 py-2 rounded-md text-base font-medium flex items-center"
                    >
                        <FaSignOutAlt className="mr-2" />
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
