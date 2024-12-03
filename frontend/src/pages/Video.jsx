import React, { useEffect, useState } from 'react'
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
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [data] = useState([
        {
            title: "Freeuse Delivery Service Trailer",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/ZOmvPX9BziLTuQFpoAyDig/023/746/988/1280x720.c.jpg.v1694164732"
        },
        {
            title: "Busty stepdaughter is trying to get stepdads approval with her",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/1ZtDK0a4i-_8eX5DsfGELw/023/642/399/1280x720.c.jpg.v1691571376"
        },
        {
            title: "What's My Big Stepbrother's Cock Size?",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/82qgM2Db4PNXCfNEB9tX-A/025/305/356/1280x720.17284982.jpg"
        },
        {
            title: "Justic The Professional Cuddler Fucks BBC",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/L8yJUqnsfcSom16jfpFXeQ/025/529/696/1280x720.17337653.jpg"
        },
        {
            title: "Busty Asian Chef Combines Freeuse Sex and Fine Dining",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/pLs5JDBe9dBotgwxOyEfVw/025/580/961/1280x720.17331407.jpg"
        },
        {
            title: "Mandy Rhea Lets BBC Fill Her In Hopes Of Sealing The Deal",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/Ndz5Pcn32XVFaRxrJZiO4Q/025/406/491/1280x720.17302810.jpg"
        },
        {
            title: "Brazzers - Mommy Got Boobs - Home-made American Tits, scene st",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/TUXO1W4DF_fpYbKKCwbrQA/025/486/261/1280x720.17315735.jpg"
        },
        {
            title: "sexy mommy get fucked by young guy",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/t2OLRCfhsDQMEvJfc3cc3Q/025/541/694/1280x720.17328327.jpg"
        },
        {
            title: "Give Me Your Tasty Leche",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/k5azru2cCHe0kdusfcQ9VQ/025/495/081/v2/2560x1440.223.webp"
        },
        {
            title: "Cum in my pussy like it's last day.",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/00qpAwijgWd_aI6V9m7JHw/025/181/353/1280x720.17262793.jpg"
        },
        {
            title: "Alexis Fawx Plays Nurse With A Young Stud",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/HpP5UznhU4A-8GQ7CkOohg/014/049/631/1280x720.6.jpg"
        },
        {
            title: "Suspicious Nun Endures A Thorough Cavity Search",
            thumbnailUrl: "https://ic-nss.flixcdn.com/a/OTYxOGU5MGEzOTYxMGIxOWY3NDdmMzYzMTE2ZDE5Njk/webp,s(w:240,h:135)/xc/Ux/UxCdun/frame/original/11.jpg"
        },
        {
            title: "Busty stepdaughter rough fucked as fuck toy and she loves it",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/TBjR1f86ar67HXCbZ1gasA/023/667/496/v2/2560x1440.223.webp"
        },
        {
            title: "Woman caught me jerking off...",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/JcMeb9ya6cfLm7OXOKLP8g/023/498/182/1280x720.c.jpg.v1688022622"
        },
        {
            title: "Redneck John (pt.1) – Nigerian Bombshell Whore",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/akaGF2quZeugNxOGq0YMLw/025/261/863/1280x720.17281210.jpg"
        },
        {
            title: "Katie Kush's Pussy Is Hungry For Cum From BBC",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/26_qDTJeeUK9V_B_YECPyA/025/488/121/1280x720.17319808.jpg"
        },
        {
            title: "My Sisters Hot Friend is Dan Daniels for Naughty America",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/52sgb9x_rWUJeUV4R42mAQ/025/347/344/v2/2560x1440.237.webp"
        },
        {
            title: "Busty Angela White Has Passionate Sex with a Black Stud",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/95eix3pFvyao0qqEV1zKpQ/023/503/266/1280x720.c.jpg.v1688137001"
        },
        {
            title: "This Furniture Can Fuck?!",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/oUElZ7Xm8-RfdYErTgp-RQ/025/508/561/1280x720.17315709.jpg"
        },
        {
            title: "Hot secretary and her big cocked boss",
            thumbnailUrl: "https://thumb-nss.xhcdn.com/a/GOBFNeFq4V1539aQIK7JOQ/025/218/075/1280x720.17270158.jpg"
        }
    ])
    const formatSlugToTitle = (slug) => slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    useEffect(() => {
        data.forEach(elem => {
            if (elem.title == formatSlugToTitle(slug)) {
                setThumbnailUrl(data.thumbnailUrl)
                console.log(data.thumbnailUrl);

            }
        })
    }, [])
    return (
        <>
            <Navbar />
            <main className='px-1 '>
                {/* heading */}
                <h1 className='text-white text-2xl font-thin w-full mt-2 flex-wrap'>{
                    slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                }</h1>
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
                <section className='w-full  aspect-video flex justify-center items-center'>

                    <Reactplayer
                        url="https://www.youtube.com/watch?v=e_04ZrNroTo"
                        light={thumbnailUrl}
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