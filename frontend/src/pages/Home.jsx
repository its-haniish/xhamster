import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
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

  return (
    <main className={`w-full h-full bg-[#292828] ${isSidebarOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
      <Navbar />

      <section>
        <div className='w-full flex justify-between p-1'>
          <h1 className='text-white text-xl font-semibold'>Trending Free Porn Videos</h1>
          <select className='bg-[#292828] rounded-md px-2 py-1 text-white focus:outline-none w-[30vw] font-medium'>
            <option value="desending_time" className='text-sm'>Trending</option>
            <option value="desending_time" className='text-sm'>Most Liked</option>
            <option value="revelence" className='text-sm'>Relevance</option>
            <option value="asending_time" className='text-sm'>Latest</option>
            <option value="desending_time" className='text-sm'>Old is Gold</option>
          </select>
        </div>
      </section>

      {/* Line */}
      <hr className='border-t-2 border-[#292828]' />

      {/* Videos */}
      <section className='flex flex-wrap justify-evenly gap-1 px-1 pt-2 pb-9 z-0'>
        {/* Sample VideoCards */}

        {data.map((elem, index) => (
          <VideoCard
            slug={elem.title.split(' ').join('-').toLowerCase()}
            key={index}
            thumbnailUrl={elem.thumbnailUrl}
            length={Math.floor(Math.random() * 10) * index + 299} // length in seconds
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
