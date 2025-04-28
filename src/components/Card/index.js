import React, { useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import './style.css';
import { timeAgo } from '../../utils/datefns';
import Channel from '../Channel';


const VideoCard = ({ item }) => {

  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
    <section className='card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <VideoPlayer thumbnails={item?.snippet?.thumbnails} videoId={item.id.videoId} isHover={isHover} />
      <div className='card-info'>
        <div className='title'>{item?.snippet.title}</div>
        <div className='description'>{timeAgo(item?.snippet?.publishTime)}</div>
        <div className='tw-mt-1'>
          <Channel id={item?.snippet?.channelId} name={item?.snippet?.channelTitle} />
        </div>
        <div className='description'>{item?.snippet.description}</div>
      </div>
    </section>
  )
}

export default VideoCard;