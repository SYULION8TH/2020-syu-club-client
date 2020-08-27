import axios from '../lib/axios';

export const getPosts = async () => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts`,
    });

    return response.data;
};

export const getPopularPosts = async () => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts/famous`,
    });

    return response.data;
};