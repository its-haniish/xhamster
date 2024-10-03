import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import Reactplayer from "react-player"
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdBugReport } from "react-icons/md";
import { sharePage } from "../utils/SharePage.js"
import VideoCard from "../components/VideoCard"

const Video = () => {
    const { slug } = useParams();
    const [showComments, setShowComments] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <>
            <Navbar />
            <main className='px-1 '>
                {/* heading */}
                <h1 className='text-white text-2xl font-thin w-full mt-2 flex-wrap'>{slug}</h1>
                {/* tags/ */}
                <ul className='flex w-full h-fit justify-start gap-2 flex-wrap mt-2'>
                    <li className='text-white w-fit h-fit text-sm px-2 py-1 bg-[#292828] rounded-md'>Most Liked</li>
                    <li className='text-white w-fit h-fit text-sm px-2 py-1 bg-[#292828] rounded-md'>Top Video</li>
                    <li className='text-white w-fit h-fit text-sm px-2 py-1 bg-[#292828] rounded-md'>Trending</li>
                    <li className='text-white w-fit h-fit text-sm px-2 py-1 bg-[#292828] rounded-md'>Hot 🔥</li>
                    <li className='text-white w-fit h-fit text-sm px-2 py-1 bg-[#292828] rounded-md'>Latest</li>
                    <li className='text-white w-fit h-fit text-sm px-2 py-1 bg-[#292828] rounded-md'>Ranl-1</li>
                </ul>
                {/* video player */}
                <section className='w-full bg-gray-900  aspect-video'>
                    <Reactplayer
                        url="/song.mp4"
                        light="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg"
                        width='100%'
                        height='100%'
                        controls
                    />
                </section>
                {/* video actions */}
                <section className='w-full flex justify-evenly items-center overflow-hidden p-1 mt-2'>
                    <div className='flex flex-col justify-center items-center cursor-pointer'
                        onClick={() => {
                            if (isDisliked) {
                                setIsDisliked(false)
                            }
                            setIsLiked(!isLiked)
                        }}
                    >
                        <AiFillLike color={`${isLiked ? 'skyblue' : 'white'}`} size={30} className='bg-none' />
                        <span className='text-white' >2369</span>
                    </div>
                    <div className='flex flex-col justify-center items-center cursor-pointer'
                        onClick={() => {
                            if (isLiked) {
                                setIsLiked(false)
                            }
                            setIsDisliked(!isDisliked)
                        }
                        }
                    >
                        <AiFillDislike color={`${isDisliked ? 'skyblue' : 'white'}`} size={30} className='bg-none' />
                        <span className='text-white'>123</span>
                    </div>
                    <div className='flex flex-col justify-center items-center cursor-pointer'
                        onClick={() => setIsFavorite(!isFavorite)}
                    >
                        <FaHeart color={`${isFavorite ? 'red' : 'white'}`} size={30} className='bg-none' />
                        <span className='text-white'>2369</span>
                    </div>
                    <div className=' flex flex-col justify-center items-center cursor-pointer '
                        onClick={() => setShowComments(!showComments)}
                    >
                        <FaComments color={`${showComments ? 'skyblue' : 'white'}`} size={30} className='bg-none' />
                        <span className={`${showComments ? 'text-sky-200' : 'text-white'}`}>Comments</span>
                    </div>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                        <IoIosShareAlt color='white' size={30} className='bg-none'
                            onClick={() => {
                                sharePage(slug, window.location.href)
                            }}
                        />
                        <span className='text-white'>Share</span>
                    </div>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                        <MdBugReport color='white' size={30} className='bg-none' />
                        <span className='text-white'>Report</span>
                    </div>
                </section>

                {/* comments */}
                {
                    showComments && (
                        <section className='w-full mt-2'>

                            <h2 className='text-white text-xl font-thin'>Comments</h2>

                            <div className='w-full p-1 mt-1 rounded-md border border-[#202021] bg-[#292828]'>
                                <div className='w-full flex justify-between items-center bg-[#292828]'>
                                    <div className='flex items-center gap-2 bg-[#292828]'>
                                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg" alt="user" className='w-10 h-10 rounded-full bg-[#292828]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-white text-sm bg-[#292828]'>John Doe</h1>
                                            <p className='text-white text-xs bg-[#292828]' >2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2 bg-[#292828]'>
                                        <AiOutlineLike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>2369</span>
                                        <AiOutlineDislike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>123</span>
                                    </div>
                                </div>
                                <p className='text-white text-sm mt-2 bg-[#292828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                                    reprehenderit
                                    voluptates
                                    quas
                                    quae
                                </p>
                            </div>


                            <div className='w-full p-1 mt-1 rounded-md border border-[#202021] bg-[#292828]'>
                                <div className='w-full flex justify-between items-center bg-[#292828]'>
                                    <div className='flex items-center gap-2 bg-[#292828]'>
                                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg" alt="user" className='w-10 h-10 rounded-full bg-[#292828]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-white text-sm bg-[#292828]'>John Doe</h1>
                                            <p className='text-white text-xs bg-[#292828]' >2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2 bg-[#292828]'>
                                        <AiOutlineLike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>2369</span>
                                        <AiOutlineDislike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>123</span>
                                    </div>
                                </div>
                                <p className='text-white text-sm mt-2 bg-[#292828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                                    reprehenderit
                                    voluptates
                                    quas
                                    quae
                                </p>
                            </div>



                            <div className='w-full p-1 mt-1 rounded-md border border-[#202021] bg-[#292828]'>
                                <div className='w-full flex justify-between items-center bg-[#292828]'>
                                    <div className='flex items-center gap-2 bg-[#292828]'>
                                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg" alt="user" className='w-10 h-10 rounded-full bg-[#292828]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-white text-sm bg-[#292828]'>John Doe</h1>
                                            <p className='text-white text-xs bg-[#292828]' >2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2 bg-[#292828]'>
                                        <AiOutlineLike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>2369</span>
                                        <AiOutlineDislike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>123</span>
                                    </div>
                                </div>
                                <p className='text-white text-sm mt-2 bg-[#292828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                                    reprehenderit
                                    voluptates
                                    quas
                                    quae
                                </p>
                            </div>


                            <div className='w-full p-1 mt-1 rounded-md border border-[#202021] bg-[#292828]'>
                                <div className='w-full flex justify-between items-center bg-[#292828]'>
                                    <div className='flex items-center gap-2 bg-[#292828]'>
                                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg" alt="user" className='w-10 h-10 rounded-full bg-[#292828]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-white text-sm bg-[#292828]'>John Doe</h1>
                                            <p className='text-white text-xs bg-[#292828]' >2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2 bg-[#292828]'>
                                        <AiOutlineLike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>2369</span>
                                        <AiOutlineDislike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>123</span>
                                    </div>
                                </div>
                                <p className='text-white text-sm mt-2 bg-[#292828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                                    reprehenderit
                                    voluptates
                                    quas
                                    quae
                                </p>
                            </div>



                            <div className='w-full p-1 mt-1 rounded-md border border-[#202021] bg-[#292828]'>
                                <div className='w-full flex justify-between items-center bg-[#292828]'>
                                    <div className='flex items-center gap-2 bg-[#292828]'>
                                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg" alt="user" className='w-10 h-10 rounded-full bg-[#292828]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-white text-sm bg-[#292828]'>John Doe</h1>
                                            <p className='text-white text-xs bg-[#292828]' >2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2 bg-[#292828]'>
                                        <AiOutlineLike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>2369</span>
                                        <AiOutlineDislike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>123</span>
                                    </div>
                                </div>
                                <p className='text-white text-sm mt-2 bg-[#292828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                                    reprehenderit
                                    voluptates
                                    quas
                                    quae
                                </p>
                            </div>



                            <div className='w-full p-1 mt-1 rounded-md border border-[#202021] bg-[#292828]'>
                                <div className='w-full flex justify-between items-center bg-[#292828]'>
                                    <div className='flex items-center gap-2 bg-[#292828]'>
                                        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg" alt="user" className='w-10 h-10 rounded-full bg-[#292828]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-white text-sm bg-[#292828]'>John Doe</h1>
                                            <p className='text-white text-xs bg-[#292828]' >2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2 bg-[#292828]'>
                                        <AiOutlineLike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>2369</span>
                                        <AiOutlineDislike color='white' size={20} className='bg-none bg-[#292828]' />
                                        <span className='text-white bg-[#292828]'>123</span>
                                    </div>
                                </div>
                                <p className='text-white text-sm mt-2 bg-[#292828]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
                                    reprehenderit
                                    voluptates
                                    quas
                                    quae
                                </p>
                            </div>


                        </section>
                    )}

                {/* similar videos */}

                <hr
                    className='border-t-2 border-[#292828] mt-2'
                />

                <section className='flex flex-wrap justify-evenly gap-1 px-1 pt-2 pb-9 z-0'>
                    <h2 className='text-white w-full text-xl font-medium'>Recommended Best Porn Videos </h2>
                    {/* Sample VideoCards */}
                    {[...Array(4)].map((_, index) => (
                        <VideoCard
                            slug={`video_${index + 1}`}
                            key={index}
                            thumbnailUrl="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-p-1600.jpg"
                            length={125} // length in seconds
                        />
                    ))}
                </section>



            </main>
        </>
    )
}

export default Video