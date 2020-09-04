import axios from '../lib/axios';

export const getQNAs = async (clubId, params) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/${clubId}/qna/`,
        params: params,
    });

    return response.data;
};

export const getQNADetail = async (clubId, qnaId, params) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: `GET`,
        url: `${host}/clubs/${clubId}/qna/${qnaId}/`,
    });

    return response.data;
};

export const getQNAReplies = async (qnaId, params) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/qna/${qnaId}/replies/`,
    });

    return response.data;
};

export const postQNAReply = async (qnaId, data) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'POST',
        url: `${host}/qna/${qnaId}/replies/`,
        data: {
            qna_reply_content: data.qna_reply_content,
            is_secret: data.is_secret,
            parent_reply: data.parent_reply,
        },
    });

    return response.data;
};
