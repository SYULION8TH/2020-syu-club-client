import axios from 'axios';

export const fetchQna = async (clubId) => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/qna/`,
    });

    return response.data;
};
