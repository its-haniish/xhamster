import React, { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import { HiSearch } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { FaCrown } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import Sidebar from './Sidebar';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(true); // Start with search bar hidden

    const isMobile = useIsMobile();

    // Function to handle search bar toggle
    const handleSearchToggle = () => {
        setShowSearchBar((prev) => !prev);
    };

    return (
        <nav className="w-full text-white relative">
            {
                isMobile ? (
                    <>
                        {
                            showSidebar &&
                            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                        }
                        <div className="flex justify-between items-center px-2 py-1" >
                            <img src="/logo.png" alt="Logo" className='w-40 cursor-pointer' />
                            <ul className='flex justify-evenly w-40'>
                                <li className='cursor-pointer'>
                                    <HiSearch
                                        size={25}
                                        color={showSearchBar ? "red" : "white"}
                                        onClick={handleSearchToggle}
                                    />
                                </li>
                                <li className='cursor-pointer'>
                                    <RxAvatar size={25} color='white' />
                                </li>
                                <li className='cursor-pointer' onClick={() => setShowSidebar(true)}>
                                    <HiMenu size={26} color='white' />
                                </li>
                            </ul>
                        </div>

                        {/* Conditional rendering of options based on search bar state */}
                        {!showSearchBar ? (
                            <ul className='bg-black py-1 w-full flex gap-x-4 text-white overflow-x-auto whitespace-nowrap'>
                                <li className='text-lg flex justify-center items-center gap-1 bg-black cursor-pointer'>
                                    <GoDotFill color='red' size={15} />
                                    Live Sex
                                </li>
                                <li className='text-lg flex justify-center items-center gap-1 bg-black cursor-pointer'>
                                    <FaCrown color='orange' size={20} />
                                    <span className='text-orange-400 bg-black'>Premium</span> Videos
                                </li>
                                <li className='text-lg flex justify-center items-center gap-1 bg-black cursor-pointer'>
                                    <LuHeartHandshake color='pink' size={20} />
                                    Sex Chat
                                </li>
                                <li className='text-lg bg-black cursor-pointer'> Pornstars</li>
                                <li className='text-lg bg-black cursor-pointer'>Channels</li>
                            </ul>
                        ) : (
                            <div className='flex items-center justify-between bg-black rounded-full overflow-hidden border-2 border-transparent hover:border-gray-600 transition m-1'>
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='bg-black text-white rounded-full px-4 py-2 focus:outline-none'
                                />
                                <button className='bg-red-600 text-white rounded-full px-4 py-2 text-sm ml-2 hover:bg-red-700 transition flex items-center shadow-md hover:shadow-lg m-1'>
                                    Search
                                </button>
                            </div>

                        )}


                        {/* Category list */}
                        <ul className='bg-[#292828] py-2 px-1 w-full flex gap-x-4 text-white overflow-x-auto whitespace-nowrap'>
                            <li className='flex justify-center items-center gap-1 bg-gray-700 cursor-pointer px-2 py-1 rounded-md'>
                                <AiOutlineMenuUnfold size={20} color='white' className='bg-gray-700' />
                                All Categories
                            </li>
                            <li className='flex justify-center items-center gap-1 bg-gray-700 cursor-pointer px-2 py-1 rounded-md'>
                                Live Sex
                            </li>
                            <li className='flex justify-center items-center gap-1 bg-gray-700 cursor-pointer px-2 py-1 rounded-md'>
                                Videos
                            </li>
                            <li className='flex justify-center items-center gap-1 bg-gray-700 cursor-pointer px-2 py-1 rounded-md'>
                                Sex Chat
                            </li>
                            <li className='bg-gray-700 cursor-pointer px-2 py-1 rounded-md'> Pornstars</li>
                            <li className='bg-gray-700 cursor-pointer px-2 py-1 rounded-md'>Channels</li>
                        </ul>
                    </>
                ) : (
                    // Desktop UI
                    <>
                        <div className="flex justify-between items-center px-2 py-1">
                            {/* Logo */}
                            <img src="/logo.png" alt="Logo" className='w-56 cursor-pointer' />

                            {/* Search bar */}
                            <div className='flex justify-center items-center relative w-fit'>
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className='border border-gray-600 py-3 pl-5 pr-12 rounded-3xl w-[40vw] focus:outline-none'
                                />
                                <HiSearch
                                    size={24}
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 cursor-pointer' // Change color on hover
                                />
                            </div>

                            {/* Auth links */}
                            <div className='gap-2 flex justify-center items-center w-fit'>
                                <a href="home" className='hover:text-orange-500'>LOGIN</a>
                                <a href="home" className='py-3 px-4 bg-pink-600 rounded-3xl text-center'>
                                    SIGNUP FOR FREE
                                </a>
                            </div>
                        </div>

                        <ul className='bg-black py-1 w-full flex justify-evenly gap-x-4 text-white overflow-x-auto whitespace-nowrap'>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Videos</li>
                            <li className='text-lg flex justify-center items-center gap-1 bg-black cursor-pointer hover:text-gray-300'>
                                <GoDotFill color='red' className='bg-black' size={15} />
                                Live Sex
                            </li>
                            <li className='text-lg flex justify-center items-center gap-1 bg-black cursor-pointer hover:text-gray-300'>
                                <FaCrown color='orange' size={20} className='bg-black' />
                                <span className='text-orange-400 bg-black'>Premium</span> Videos
                            </li>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Photos</li>
                            <li className='text-lg flex justify-center items-center gap-1 bg-black cursor-pointer hover:text-gray-300'>
                                <LuHeartHandshake color='pink' size={20} />
                                Sex Chat
                            </li>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Categories</li>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Pornstars</li>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Channels</li>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Dating</li>
                            <li className='text-lg bg-black cursor-pointer hover:text-gray-300'>Subscriptions</li>
                            <li className='self-end flex justify-center items-center gap-1 bg-black cursor-pointer hover:text-gray-300'>
                                <FaCloudUploadAlt className='mt-1 bg-black' />
                                Upload
                            </li>
                        </ul>
                    </>
                )
            }
        </nav>
    );
};

export default Navbar;
