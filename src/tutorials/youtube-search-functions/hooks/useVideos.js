import {useEffect, useState} from 'react';
import axiosYoutubeClient from '../apis/youtube';

export const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // 1-st default search when user opens App, instead of componentDidMount
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (searchString) => {
        const response = await axiosYoutubeClient.get('/search', {
            params: {
                q: searchString
            }
        });

        setVideos(response.data.items);
    }

    return [videos, search]; // return videos result and f() that can some kind modify that videos
};
