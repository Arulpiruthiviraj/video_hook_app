import React, {useState,useEffect} from 'react';
import {Container,Grid,Responsive} from 'semantic-ui-react';
import SearchBar from "./SearchBar";
import {YoutubeKey} from "../apis/Youtube";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


const  App=()=>{

  const [searchResults, setSearchResults] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(( ) => {
    onSearchSubmit('Mindfullness')
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
    <Responsive minWidth={768}>
        <Container>
      <SearchBar formSubmit={onSearchSubmit}/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <VideoDetail video={selectedVideo}/>
          </Grid.Column>
          <Grid.Column width={5}>
            <VideoList onVideoSelect={onVideoSelect} videos={searchResults}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    </Responsive>
  );
}

export default App;
