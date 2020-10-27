import axios from '../lib/axios';

export const getPosts = async (params) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts`,
        params: params,
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

export const getPostsRelatedToClub = async (clubId, params, nextUrl) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/${clubId}/posts`,
        params: {
            limit: 10,
            ...params,
        },
    });
    return response.data;
};
export const getPostReplies = async (postId) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/posts/${postId}/replies`,
    });

    return response.data;
};

export const postReply = async (postId, data) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'POST',
        url: `${host}/posts/${postId}/replies/`,
        data: {
            // user:
            post_reply_content: data.post_reply_content,
            parent_reply: data.parent_reply,
        },
    });

    return response.data;
};
