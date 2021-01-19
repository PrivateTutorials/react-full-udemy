import axios from 'axios';

const ACCESS_KEY = 'AIzaSyD64VdePDRP__T5MjgLPClDR3qG3a-Z-W4';

// creates a customized instance of axios client with default properties
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: ACCESS_KEY
    }
});
