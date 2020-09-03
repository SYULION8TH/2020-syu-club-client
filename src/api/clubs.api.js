import axios from '../lib/axios';

export async function getSomething() {
    const host = process.env.REACT_APP_API_HOST;

    const response = await axios({
        url: `${host}/something`,
    });

    return response.data;
}
export async function getClubs(params) {
    const host = process.env.REACT_APP_API_HOST;

    const response = await axios({
        method: 'GET',
        url: `${host}/clubs`,
        params: params,
    });

    return response.data;
}

export async function getClub(clubId, params) {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/${clubId}`,
        params: params,
    });
    return response.data;
}

export async function getFamousClubs(params) {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        method: 'GET',
        url: `${host}/clubs/famous`,
        params: params,
    });

    return response.data;
}
