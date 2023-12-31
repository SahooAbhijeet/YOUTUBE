import React from 'react'


const VideoCard = ({info}) => {
    // console.log(info);
      const { snippet, statistics, contentDetails} = info;
      const {channelTitle, thumbnails, localized} = snippet;
      const {title}  = localized;
      const {viewCount} = statistics;
      
     
    

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


      
      function formatViews(count) {
        if (count >= 1e9) {
          return (count / 1e9).toFixed(1) + 'B';
        } else if (count >= 1e6) {
          return (count / 1e6).toFixed(1) + 'M';
        } else if (count >= 1e3) {
          return (count / 1e3).toFixed(1) + 'K';
        } else {
          return count.toString();
        }
      }
      const convert = formatViews(viewCount);
     






          const days = snippet.publishedAt
          function getTimeAgo(timestamp) {
            const current = new Date();
            const previous = new Date(timestamp);
          
            const seconds = Math.floor((current - previous) / 1000);
            let interval = Math.floor(seconds / 31536000);
          
            if (interval >= 1) {
              return interval === 1 ? `${interval} year ago` : `${interval} years ago`;
            }
            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) {
              return interval === 1 ? `${interval} month ago` : `${interval} months ago`;
            }
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
              return interval === 1 ? `${interval} day ago` : `${interval} days ago`;
            }
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;
            }
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;
            }
            return `${Math.floor(seconds)} seconds ago`;
          }
            const time = getTimeAgo(days)

  

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
                 {time}  
               
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

          }   
        
export default VideoCard