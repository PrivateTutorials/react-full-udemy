import React, {useEffect, useState} from 'react';
import {SearchBar} from "./SearchBar";
import {VideoList} from "./VideoList";
import {VideoDetail} from "./VideoDetail";
import {useVideos} from "../hooks/useVideos";

export const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    // Custom hook
    const [videos, search] = useVideos('cars');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                       {/* onVideoSelect={setSelectedVideo} is the same as:
                        onVideoSelect={(video) => setSelectedVideo(video)} */}
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
