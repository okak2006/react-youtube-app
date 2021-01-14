import React from 'react';
import VideoItems from './VideoItems';

//destruture to just extract videos so we don't have to write props.videos and we can just say videos. Likewise for props.onVideoSelect
export default function VideoList( {videos, onVideoSelect} ) {
    const renderedList = videos.map(
        (video,i) => <VideoItems onVideoSelect={onVideoSelect} video={video} key={i}/>
    )
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}
