import { useState } from 'react';
import VideoCard from './components/Card/index';
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isNewSearch, setIsNewSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    items: [],
    pageInfo: null,
    nextPageToken: ''
  });

  const fetchVideos = async() => {
    try {
      const params = {
        part: "snippet",
        q: searchTerm,
        type: "video",
        maxResults: 10,
        pageToken: isNewSearch ? "" : data.nextPageToken,
        key: process.env.REACT_APP_API_KEY,
      };
      const qs = new URLSearchParams(params);
      setLoading(true);
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${qs.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { items, pageInfo, nextPageToken } = await response.json();
      setData({ items, pageInfo, nextPageToken })
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setIsNewSearch(true);
    setData({items: [], nextPageToken: null});
    fetchVideos();
  };

  return (
    <div className='youtube-search-component'>
      <div className='header'>
        <img src="./logo.png" alt="logo" className='brand-logo'/>
        <form onSubmit={handleSearch}>
          <input type='text' name='searchBox' className={`search-box ${data.items.length ? 'top' : 'center'}`} placeholder='Search ...'
            value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </form>
      </div>
      <div className='card-container list'>
        {data.items?.map(item => <VideoCard item={item} />)}
      </div>

    </div>
  )
}

export default App;

