import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Redux/Slices/app-slice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {

  const [ searchQuery, setSearchQuery] = useState(" ");
  const [ suggestions, setSuggestion ] = useState([ ]);
  const [ showsuggestions, setShowSuggestions] = useState(false);

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
      console.log(json);
      setSuggestion(json[1]);
  }

  const dispatch = useDispatch();


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-3 m-3 shadow-lg'>
        <div className='flex col-span-1'>
          <a href='/'>
                <img 
                onClick={() => toggleMenuHandler()}
                className='w-10 h-10' 
                alt='menu' 
                src='https://www.svgrepo.com/show/312300/hamburger-menu.svg'
                />
                </a>

                <a href='/'>
                <img 
                className='w-32 h-10'
                alt='youtube'
                src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg'
                />
                </a>
        </div>

      <div>
        <div className='col-span-10 px-10 '>
            <input 
            className='w-96 rounded-l-full border border-gray-400 p-2 px-5'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
            <button className='border border-gray-400 w-16 rounded-r-full  p-2 bg-gray-200'> 🔍 </button>
        </div>
        {showsuggestions && (
        <div className='fixed bg-white p-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                🔍{s}
              </li>
            ))}
          </ul>

        </div>
        )}


       
      </div>

      <div>
      <a href="/">
          <img
          className='h-10 '
          src='https://i.pinimg.com/564x/74/ce/14/74ce14befb22695743659cf8a8290c2b.jpg'
          alt='mic'
          />
        </a>
      </div>
      

        <div className='text-lg col-span-1'>
          <a href='/'>
            <img 
            className='h-12'
            src='https://pixsector.com/cache/50fcb576/av0cc3f7b41cb8510e35c.png'
            alt='user'
            />
          </a>
        </div>
    </div>
  )
}

export default Header