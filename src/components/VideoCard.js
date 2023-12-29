import React from 'react'


const VideoCard = ({info}) => {
    // console.log(info);
    const { snippet, statistics, contentDetails
    } = info;
    const {channelTitle, thumbnails, localized,publishedAt} = snippet;
    const {title, description}  = localized;
    const {commentCount, favoriteCount, likeCount,viewCount} = statistics;
      const convert = (viewCount/10000).toFixed(0) + "k";
     
    

      const duration = contentDetails.duration;
      const convertDurationToTimeCode = (duration) => {
        const match = duration.match(/PT(\d+)M(\d+)S/);
        if (match) {
          const minutes = parseInt(match[1], 10);
          const seconds = parseInt(match[2], 10);
          const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          return formattedTime;
        }
        return "00:00"; 
      };

      const timeCode = convertDurationToTimeCode(duration);


      

  const currentDate = new Date();
  const givenDate = new Date(publishedAt);
  const differenceInMilliseconds =  currentDate - givenDate;

  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.abs(Math.floor(differenceInMilliseconds / millisecondsInDay));

  return (

    <div className='w-72 h-72 flex gap-3 flex-col '>
      <div className='relative '>
        <span className='absolute bottom-5 right-1 text-sm bg-gray-900 px-2 mx-0 z-10'>
            {timeCode}
        </span>
          <img
          src={thumbnails.medium.url}
          alt='Thumbnail'
          className='h-44 w-72  p-2 m-2 rounded-3xl'
          />
      </div>
      <div className='flex gap-2'>
        <div className='min-w-fit'>
          {/* <a href='#'>
            
            </a>  */}
        </div>
        <div>
          <h3>
            <a href='#' className='line-clamp-2'>
              {title}
              </a>
          </h3>
          <div className='text-sm text-gray-400'>
            <div>
              <a href='#' className='hover:text-white'>
                {channelTitle}

              </a>
            </div>
            <div className='flex items-center gap-2  relative'>
              <span >
                {convert} views
              </span>
              <span >
                 {differenceInDays} days ago
               
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

          }   
        
export default VideoCard