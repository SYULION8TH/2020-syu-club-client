import axios from '../lib/axios';

export const getPosts = async (search) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts`,
        params: {
            search: search ? search : '',
        },
    });

    return response.data;
};
export const getPostDetail = async (clubId, postId) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: `GET`,
        url: `${host}/clubs/${clubId}/posts/${postId}`,
    });

    return response.data;
};

export const getPopularPosts = async () => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts/famous`,
        params: {
            limit: 10,
        },
    });

    return response.data;
};

export const getPostsRelatedToClub = async (clubId, params) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/${clubId}/posts`,
        params: params,
    });
    return response.data;
};
