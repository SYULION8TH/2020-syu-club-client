import axios from 'axios';

export const getSomething = async () => {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        url: `${host}/something/`,
    });

    return response.data;
};

export const login = async () => {
    const host = process.env.REACT_APP_API_HOST;
};
