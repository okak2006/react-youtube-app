import React from 'react'
import './VideoItems.css'

export default function VideoItems({video, onVideoSelect}) {

    return (
        // watch out: not onClick={onVideoSelect} because we want to pass video
        <div className="item video-items" onClick={()=>onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt=''/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}
