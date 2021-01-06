import React from 'react';
import {SearchBar} from "./SearchBar";
import {VideoList} from "./VideoList";

import axiosYoutubeClient from '../apis/youtube';

export class App extends React.Component {
    state = {
        videos: []
    }

    onTermSubmit = async (searchString) => {
        const response = await axiosYoutubeClient.get('/search', {
            params: {
                q: searchString
            }
        });

        this.setState({videos: response.data.items});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}
