import axios from 'axios';

// creates a customized instance of axios client with default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bLbC5asWLilquvTQ7NapUO7bRetKpNP6es5oKECZ9T8'
    }
});
