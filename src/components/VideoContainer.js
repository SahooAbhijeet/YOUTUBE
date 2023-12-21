import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  async function getVideos() {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      console.log(json);
      // console.log(json.items);
      setVideos(json.items);
    } catch (error) {
      console.log(error);
      throw error
    }
  }
  
  
  return (
    <div className='flex flex-wrap '>
        {videos.map((video) => (
           <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
            </Link>
        ))}
    </div>
  );
        };

 
export default VideoContainer;
