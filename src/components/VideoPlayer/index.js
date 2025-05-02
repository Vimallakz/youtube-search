import React, { useState } from 'react';
import './style.css';

const VideoPlayer = ({ thumbnails, videoId }) => {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isHover ? <img src={thumbnails.high.url} alt="" className='image-card' /> :
        <iframe
          title="yt-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&fs=0&showinfo=0&iv_load_policy=1`}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
          className='video-card'
        />
      }
    </div>
  )
}

export default VideoPlayer;