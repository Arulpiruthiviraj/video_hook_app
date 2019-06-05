import React, {useState,useEffect} from 'react';
import SearchBar from "./SearchBar";
import {YoutubeKey} from "../apis/Youtube";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function App() {

  const [searchResults, setSearchResults] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(( ) => {
    onSearchSubmit('victoria premiere')
  },[]);


  const onSearchSubmit=async term=>{
   const response= await Youtube.get('/search',{
     params:{
       part:'snippet',
       maxResults: 5,
       key:YoutubeKey,
       q:term
     }
   });
    setSearchResults(response.data.items);
    setSelectedVideo(response.data.items[0])
  };
  const onVideoSelect=video=>{
    setSelectedVideo(video)
  };
  return (
    <div className={"ui container"}>
      <SearchBar formSubmit={onSearchSubmit}/>
      <div className={"ui grid"}>
        <div className={"ui row"}>
          <div className={"eleven wide column"}>
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className={"five wide column"}>
            <VideoList onVideoSelect={onVideoSelect} videos={searchResults}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
