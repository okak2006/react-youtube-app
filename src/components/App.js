import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {

    //data fetching is usually a great thing to try to make reusable
    //const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos])
    
    // useEffect(()=>{
    //     onTermSubmit('buildings')
    // },[])
    
    // const onTermSubmit = async (term) => {
    //     // axios.create is exported as youtube
    //     const response = await youtube.get('/search',{
    //         params: {
    //             q: {term}
    //         }
    //     })
    //     setVideos(response.data.items);
    //     setSelectedVideo(response.data.items[0])
    // }

    //note to make jsx reusable, we usually create another component
    //usually this portion does not always have to do with making state and effects reusable

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos = {videos}
                            //onVideoSelect={video=>setSelectedVideo(video)}
                            //below equivalent to above
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App