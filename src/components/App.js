import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import {YoutubeKey} from "../apis/Youtube";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";

function App() {

  const [searchResults, setSearchResults] = useState('');


  const onSearchSubmit=async term=>{
   const response= await Youtube.get('/search',{
     params:{
       part:'snippet',
       maxResults: 5,
       key:YoutubeKey,
       q:term
     }
   });
    setSearchResults(response.data.items)
  };
  return (
    <div className={"ui container"}>
      <SearchBar formSubmit={onSearchSubmit}/>
      <VideoList videos={searchResults}/>
    </div>
  );
}

export default App;
