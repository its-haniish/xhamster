import React from 'react';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { BiLogIn } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineRssFeed, MdHistory } from 'react-icons/md';
import { FaVideo, FaStar, FaCrown, FaTags, FaHeart, FaDownload } from 'react-icons/fa';


const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            {/* Close Button with Animation */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}  // Button starts invisible and slightly offscreen to the left
                animate={{ opacity: 1, x: 0 }}    // Fades in and moves to its normal position
                exit={{ opacity: 0, x: -20 }}     // Fades out and moves left when closing
                transition={{ type: "tween", duration: 0.3 }}  // Smooth transition
                className='absolute left-16 top-2 cursor-pointer' // Removed bg-transparent
            >
                <IoClose
                    className='bg-transparent border border-white rounded-full p-1'
                    size={30}
                    onClick={() => setShowSidebar(false)}
                />
            </motion.div>


            {/* Sidebar with Animation */}
            <motion.aside
                initial={{ x: '100%' }} // Start off-screen to the right
                animate={{ x: 0 }} // Animate into view
                exit={{ x: '100%' }} // Animate out of view when closing
                transition={{ type: "tween", duration: 0.3 }} // Smooth transition
                className='h-[100vh] w-[70vw] absolute right-0 top-0 bg-[#292828] shadow-lg p-3'
            >

                <ul className='flex rounded-2xl justify-evenly items-center'>
                    <li className='flex flex-col justify-center items-center py-4 cursor-pointer'>
                        <RxAvatar size={30} />
                        <span>
                            Sign Up
                        </span>
                    </li>
                    <li className='flex flex-col justify-center items-center py-4 cursor-pointer'>
                        <BiLogIn size={30} />
                        <span>
                            Login
                        </span>
                    </li>
                    <li className='flex flex-col justify-center items-center py-4 cursor-pointer '>
                        <FaCloudUploadAlt size={30} />
                        <span>
                            Upload
                        </span>
                    </li>
                </ul>

                {/* Subscription and Watch History */}
                <ul className='flex flex-col rounded-2xl mt-4 pl-10'>
                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <MdOutlineRssFeed size={25} />
                            Subscription
                        </span>
                    </li>

                    {/* Line aligned to the right and 80% wide */}
                    <hr className='w-4/5 border-t-2 border-[#292828] ml-auto' />

                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <MdHistory size={25} />
                            Watch History
                        </span>
                    </li>
                </ul>

                {/* New video, best video, top creators ... etc. more links */}
                <ul className='flex flex-col rounded-2xl mt-4 pl-10'>
                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <FaVideo size={25} />
                            New Videos
                        </span>
                    </li>

                    {/* Line aligned to the right and 80% wide */}
                    <hr className='w-4/5 border-t-2 border-[#292828] ml-auto' />

                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <FaStar size={25} />
                            Best Videos
                        </span>
                    </li>

                    {/* Line aligned to the right and 80% wide */}
                    <hr className='w-4/5 border-t-2 border-[#292828] ml-auto' />

                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <FaCrown size={25} />
                            Top Creators
                        </span>
                    </li>

                    {/* Line aligned to the right and 80% wide */}
                    <hr className='w-4/5 border-t-2 border-[#292828] ml-auto' />

                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <FaTags size={25} />
                            Categories
                        </span>
                    </li>

                    {/* Line aligned to the right and 80% wide */}
                    <hr className='w-4/5 border-t-2 border-[#292828] ml-auto' />

                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <FaHeart size={25} />
                            Dating
                        </span>
                    </li>

                    {/* Line aligned to the right and 80% wide */}
                    <hr className='w-4/5 border-t-2 border-[#292828] ml-auto' />

                    <li className='flex items-center py-4 cursor-pointer'>
                        <span className='w-full flex justify-start gap-4'>
                            <FaDownload size={25} />
                            Download App
                        </span>
                    </li>
                </ul>







            </motion.aside>
        </>
    );
};

export default Sidebar;
