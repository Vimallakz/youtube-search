import React from 'react';
import './style.css';

const VideoPlayer = ({ thumbnails, videoId, isHover }) => {
  return (
    <div className='tw-pr-4'>
      {!isHover ? <img src={thumbnails.high.url} alt="" className='image-card' /> :
        <iframe
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