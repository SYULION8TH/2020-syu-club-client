import axios from '../lib/axios';

export const fetchQna = async (clubId , params) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/${clubId}/qna`,
        params : params
    });

    return response.data;
};

