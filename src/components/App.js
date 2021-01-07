import React from 'react';
import {SearchBar} from "./SearchBar";
import {VideoList} from "./VideoList";
import {VideoDetail} from "./VideoDetail";

import axiosYoutubeClient from '../apis/youtube';

export class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async (searchString) => {
        const response = await axiosYoutubeClient.get('/search', {
            params: {
                q: searchString
            }
        });

        this.setState({videos: response.data.items});
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}
