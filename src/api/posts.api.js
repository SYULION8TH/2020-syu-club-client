import axios from '../lib/axios';

export const getPosts = async (search) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts?search=${search}`,
    });

    return response.data;
};

export const getPopularPosts = async () => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts/famous?limit=10`,
    });

    return response.data;
};