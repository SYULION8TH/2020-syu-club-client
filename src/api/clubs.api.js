import axios from '../lib/axios';

export async function getSomething() {
    const host = process.env.REACT_APP_API_HOST;

    const response = await axios({
        url: `${host}/something`,
    });

    return response.data;
}
export async function getClubs() {
    const host = process.env.REACT_APP_API_HOST;

    const response = await axios({
        method: 'GET',
        url: `http://210.114.17.157/api/clubs`,
    });

    return response.data;
}

export async function getClub() {}

export async function getFamousClubs(params) {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/famous`,
        params: params,
    });

    return response.data;
}
