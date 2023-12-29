import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Redux/Slices/app-slice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { BsBell } from 'react-icons/bs'
import {  IoMenu  } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { BiSolidVideoPlus } from "react-icons/bi";
import { AiOutlineSearch } from 'react-icons/ai';

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
    <div className='flex justify-between px-14 h-20 items-center bg-black opacity-95 sticky text-white pl-6 gap-'>
        <div className='flex  items-center text-2xl '>
          <div >
          <IoMenu className='text-3xl ' onClick={() => toggleMenuHandler()} />
          </div>

          <div >
          <img 
                className='w-36 h-20 flex-shrink-0 '
                alt='youtube'
                src='https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg'
                />
          </div>
          </div>

               <div className='flex items-center justify-center gap-5'>
                <form>
                  <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                    <div className='flex gap-5 items-center pr-5'>
                      <input
                      type='text' 
                      placeholder='Search' 
                      className='w-[500px] text-white bg-zinc-900 focus:outline-none border-none'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setShowSuggestions(false)}/>
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                      <AiOutlineSearch  className='text-xl'/>
                    </button>
                    
                  </div>
                </form>
                

                <div className=' p-3 bg-zinc-900 rounded-full hover:bg-gray-800 '>
                <IoMdMic className='text-3xl '/> 
               </div>
               </div>

                <div className='flex gap-8 items-center text-xl'>
                <BiSolidVideoPlus className='text-3xl '/>

                <div className='relative'>
                  <BsBell />
                  <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
                </div>
                

                <img 
                src='https://media.licdn.com/dms/image/D5603AQEhwA94RoaZtg/profile-displayphoto-shrink_800_800/0/1700829269428?e=1709164800&v=beta&t=uMmtuSq1CjDQtSF42qP6rInWLpFC5uBxlwBTV64hBRQ'
                alt='profile'
                className='w-9 h-9 rounded-full' />
           
        </div>

        </div>



       
      

 
      

    //     <div className='flex items-center gap-6'>
        
    //     <IoNotifications className='text-3xl'/>
    //     <FaUser className='text-2xl'/>
    //     </div>
    // </div>
  )
}

export default Header