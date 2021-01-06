import React from 'react';
import axiosUnsplashClient from '../api/unsplash';

import {SearchBar} from './SearchBar';
import {ImageList} from './ImageList';

export class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (searchTerm) => {
        const response = await axiosUnsplashClient.get('/search/photos', {
            params: {
                query: searchTerm // the same as "/search/photos?query=searchTerm"
            }
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
