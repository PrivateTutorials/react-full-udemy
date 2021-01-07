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

    componentDidMount() {
        // 1-st default search when user opens App
        this.onTermSubmit('cars');
    }

    onTermSubmit = async (searchString) => {
        const response = await axiosYoutubeClient.get('/search', {
            params: {
                q: searchString
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
