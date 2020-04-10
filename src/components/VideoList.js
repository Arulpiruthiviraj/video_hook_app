import React from 'react';
import VideoItem from "./VideoItem";


const VideoList =({videos,onVideoSelect})=> {
   const renderedResults=videos.length > 0 ?(
       videos.map(video=>{
           return <VideoItem
               key={video.id.videoId}
               onVideoSelect={onVideoSelect}
               video={video}/>
       })):(
      <p>No Record</p>
   );
    return (
        <div className={"ui relaxed divided list"} >
            {renderedResults}
        </div>
    );
};
export default VideoList;