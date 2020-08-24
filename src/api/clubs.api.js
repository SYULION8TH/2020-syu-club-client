import axios from '../lib/axios';

export async function getSomething() {
    const host = process.env.REACT_APP_API_HOST;

    const response = await axios({
        url: `${host}/something`,
    });

    return response.data;
}
