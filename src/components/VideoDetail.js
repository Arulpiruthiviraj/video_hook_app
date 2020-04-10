import React from 'react';
import {Container,Embed ,Header, Segment ,Placeholder} from 'semantic-ui-react';

const VideoDetail=({video})=> {
    if (!video){
      return(
          <div>
              loading.....
          </div>
      )
    };
    return (
        <Container>
             <Embed
            id={video.id.videoId}
            title={video.snippet.title}
            source={'youtube'}
            aspectRatio='16:4'
            autoplay={false}
            iframe={{
            allowFullScreen: true,
          }}
          color='black'
          />
         <Segment>
            <Header>
            {video.snippet.title}
            </Header>
            <p>{video.snippet.description}</p>
            </Segment>
        </Container>
    );
};

export default VideoDetail;