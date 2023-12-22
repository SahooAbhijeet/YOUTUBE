import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {closeMenu} from '../Redux/Slices/app-slice';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
  return (
    <div className='flex flex-col px-3 '>
      <div className='px-5 py-4 flex'>
        <div>
          <iframe 
            width="1050" 
            height="500" 
            src={"https://www.youtube-nocookie.com/embed/"+searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
          <div>
            <LiveChat />
          </div>
      </div>
   <CommentContainer />
  </div>
  )
}

export default WatchPage