import React from 'react'
import { MdHome, MdSubscriptions, MdDynamicFeed, MdHistory, MdOutlineWatchLater, MdOutlineLibraryAdd, MdMusicNote, MdPodcasts, MdEmojiFlags } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdSettings, IoIosHelpCircleOutline } from "react-icons/io";
import { PiFilmSlateBold } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const mainLinks = [
  {
    icon: <MdHome className='text-2xl'/>,
    name: 'Home'
  },
  {
    icon: <SiYoutubeshorts className='text-2xl'/>,
    name: 'Shorts'
  },
  {
    icon: <MdSubscriptions className='text-2xl'/>,
    name: 'Subscriptions'
  },
]

const secondaryLinks = [
  {
    icon: <MdHistory className='text-2xl'/>,
    name: 'History'
  },
  {
    icon: <MdDynamicFeed className='text-2xl'/>,
    name: 'Your videos'
  },
  {
    icon: <MdOutlineWatchLater className='text-2xl'/>,
    name: 'Watch Later'
  },
  {
    icon: <AiOutlineLike className='text-2xl'/>,
    name: 'Liked videos'
  }
]

const exploreLinks = [
  {
    icon: <MdMusicNote className='text-2xl'/>,
    name: 'Music'
  },
  {
    icon: <PiFilmSlateBold className='text-2xl'/>,
    name: 'Films'
  },
  {
    icon: <ImNewspaper className='text-2xl'/>,
    name: 'Gaming'
  },
  {
    icon: <GiTrophyCup className='text-2xl'/>,
    name: 'Sport'
  },
  {
    icon: <MdPodcasts className='text-2xl'/>,
    name: 'Podcasts'
  },
  {
    icon: <MdOutlineLibraryAdd className='text-2xl'/>,
    name: 'Library'
  }
]

const primaryLinks = [
  {
    icon: <IoMdSettings className='text-2xl'/>,
    name: 'Settings' 
  },
  {
    icon: <MdEmojiFlags className='text-2xl'/>,
    name: 'Report settings'
  },
  {
    icon: <IoIosHelpCircleOutline className='text-2xl'/>,
    name: 'Help' 
  }, 
]


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen)
  return null;

  return (
  
<div className='w-[2200px] bg-[#212121] pr-5 pb-8 sidebar sticky overflow-scroll'>
      <ul className='flex flex-col border-b-2 border-gray-700 '>
        {mainLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )}
        )}
      </ul>

      <ul className='flex flex-col border-b-2 border-gray-800 '>
        {secondaryLinks.map(({icon, name}) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
              <Link to="#" className='flex gap-5 items-center'>{icon}
              <span className='text-sm tracking-wider font-semibold'>{name}</span>
              </Link>
            </li>
          )
        })}

      </ul>

      <ul className='flex flex-col border-b-2 border-gray-800'>
        {exploreLinks.map(({icon, name}) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
              <Link to="#" className='flex gap-5 items-center'>{icon}
              <span className='text-sm tracking-wider font-semibold'>{name}</span>
              </Link>
            </li>
          )
        })}

      </ul>

      <ul className='flex flex-col border-b-2 border-gray-800'>
        {primaryLinks.map(({icon, name}) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
              <Link to="#" className='flex gap-5 items-center'>{icon}
              <span className='text-sm tracking-wider font-semibold'>{name}</span>
              </Link>
            </li>
          )
        })}

      </ul>
    </div>

  )
}

export default Sidebar