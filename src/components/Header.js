import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Redux/Slices/app-slice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { FaUser } from "react-icons/fa6";
import { IoNotifications, IoMenu  } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { BiSolidVideoPlus } from "react-icons/bi";

const Header = () => {

  const [ searchQuery, setSearchQuery] = useState(" ");
  const [ suggestions, setSuggestion ] = useState([ ]);
  const [ showsuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch(); 


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    //API CALL
    getSearchSuggestion();

    console.log(searchQuery);

       /* 
      * MAKE AN API CALL ON EVERY KEY PRESS
      * BUT IF THE DIFFERENCES BETWEEN 2 KEY STROKE IS LESS THAN 200MS
      * DECLINE THE API CALL 
      */ 

    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer)
    }


  }, [searchQuery])

/* 
* when the  key is - (press) (key I)
* - then render the component
* - then the useEffect() is called;
* - and then start the timer => make an api call afetr 200ms
*
* when the  key is - (press) (key IP)
* - destroy the component (useEffect return method)
* - then render the component again
* - then the useEffect() is called;
* - and then start the timer => make an api call afetr 200ms
*
*  setTimeout(200ms) => make an api call after 200ms
*/


  async function getSearchSuggestion(){
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json =  await data.json();
      setSuggestion(json[1]);
  }


  return (
    <div className=' flex md:gap-10 shadow-lg  justify-between px-14 h-16 items-center w-full'>
        <div className='flex gap-4 items-center flex-shrink-0 pr-4 '>
          <a href='#'>
            <IoMenu className='text-3xl' onClick={() => toggleMenuHandler()} />
          </a>
                <a href='/'>
                <img 
                className='w-32 h-10'
                alt='youtube'
                src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg'
                />
                </a>
        </div>

      
        <div className=' px-2 flex items-center '>
            <input 
            className='w-[450px] justify-end rounded-l-full border border-gray-400 p-2 px-5'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
            <button className='border border-gray-400 w-16 rounded-r-full  p-2 bg-gray-200'> 🔍 </button>
              <IoMdMic className='text-4xl rounded-full bg-gray-200 m-2 hover:bg-gray-300'/>
        </div>
        
        {showsuggestions && (
        <div className='fixed bg-white p-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 items-center'>
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                🔍{s}
              </li>
            ))}
          </ul>
        </div>

        )}


       
      

 
      

        <div className='flex items-center gap-6'>
        <BiSolidVideoPlus className='text-3xl '/>
        <IoNotifications className='text-3xl'/>
        <FaUser className='text-2xl'/>
        </div>
    </div>
  )
}

export default Header