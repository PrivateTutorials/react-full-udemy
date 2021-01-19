import React, {useEffect, useState} from 'react';
import {SearchBar} from "./SearchBar";
import {VideoList} from "./VideoList";
import {VideoDetail} from "./VideoDetail";

import axiosYoutubeClient from '../apis/youtube';

export const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // 1-st default search when user opens App, instead of componentDidMount
    useEffect(() => {
        onTermSubmit('cars');
    }, []);

    const onTermSubmit = async (searchString) => {
        const response = await axiosYoutubeClient.get('/search', {
            params: {
                q: searchString
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit}/>
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
