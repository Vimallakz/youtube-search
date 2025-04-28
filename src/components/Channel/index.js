import React, { useEffect, useState } from 'react';
import './style.css';

const Channel = ({ id, name }) => {

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    fetchChannelLogo();
  }, [id]);

  const fetchChannelLogo = async() => {
    try {
      const url  = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if(data?.items?.[0]?.snippet?.thumbnails?.high?.url) {
        setLogo(data?.items[0].snippet.thumbnails.high.url)
      }
    } catch(error) {
      console.log('>>>>>>>>', error);
    }

  }

  return (
    <div className='channel-info'>
      {logo ? <img src={logo} alt="channel-logo" className='avatar'/> : null}
      <span>{name}</span>
    </div>);
}

export default Channel;