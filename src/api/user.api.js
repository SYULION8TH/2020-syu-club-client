import axios from '../lib/axios';

export const getUserInfo = async () => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/user/`,
    });

    return response.data;
};
