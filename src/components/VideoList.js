import React from 'react';
import VideoItem from "./VideoItem";

const VideoList =({videos})=> {
   const renderedResults=videos.length > 0 ?(
       videos.map(video=>{
           return <VideoItem video={video}/>
       })):(
       <tr>
           <td colSpan={3}>No Record</td>
       </tr>
   );
    return (
        <div className={"ui relaxed divided list"}>
            {renderedResults}
        </div>
    );
};
export default VideoList;