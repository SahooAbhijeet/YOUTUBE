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
    icon: <MdHome className='text-3xl'/>,
    name: 'Home'
  },
  {
    icon: <SiYoutubeshorts className='text-3xl'/>,
    name: 'Shorts'
  },
  {
    icon: <MdSubscriptions className='text-3xl'/>,
    name: 'Subscriptions'
  },
]

const secondaryLinks = [
  {
    icon: <MdHistory className='text-3xl'/>,
    name: 'History'
  },
  {
    icon: <MdDynamicFeed className='text-3xl'/>,
    name: 'Your videos'
  },
  {
    icon: <MdOutlineWatchLater className='text-3xl'/>,
    name: 'Watch Later'
  },
  {
    icon: <AiOutlineLike className='text-3xl'/>,
    name: 'Liked videos'
  }
]

const exploreLinks = [
  {
    icon: <MdMusicNote className='text-3xl'/>,
    name: 'Music'
  },
  {
    icon: <PiFilmSlateBold className='text-3xl'/>,
    name: 'Films'
  },
  {
    icon: <ImNewspaper className='text-3xl'/>,
    name: 'Gaming'
  },
  {
    icon: <GiTrophyCup className='text-3xl'/>,
    name: 'Sport'
  },
  {
    icon: <MdPodcasts className='text-3xl'/>,
    name: 'Podcasts'
  },
  {
    icon: <MdOutlineLibraryAdd className='text-3xl'/>,
    name: 'Library'
  }
]

const primaryLinks = [
  {
    icon: <IoMdSettings className='text-3xl'/>,
    name: 'Settings' 
  },
  {
    icon: <MdEmojiFlags className='text-3xl'/>,
    name: 'Report settings'
  },
  {
    icon: <IoIosHelpCircleOutline className='text-3xl'/>,
    name: 'Help' 
  }, 
]


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
if(!isMenuOpen)
return null;

  return (
  
<div className="pr-5 p-2 pb-8 bg-gray-300 w-2/12 h-screen fixed overflow-y-auto">      
        <ul className='flex flex-col border-b-2 border-gray-600'>
        {mainLinks.map(({icon, name}) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-100 ${name==='Home' ? "bg-slate-200" : " "} rounded-xl`}>
              <Link to="#" className='flex gap-5 items-center'>{icon}
              <span className='text-sm tracking-wider font-semibold'>{name}</span>
              </Link>
            </li>
          )
        })}

      </ul>

      <ul className='flex flex-col border-b-2 border-gray-600'>
        {secondaryLinks.map(({icon, name}) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-100 ${name==='Home' ? "bg-slate-200" : " "} rounded-xl`}>
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
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-100 ${name==='Home' ? "bg-slate-200" : " "} rounded-xl`}>
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
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-100 ${name==='Home' ? "bg-slate-200" : " "} rounded-xl`}>
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