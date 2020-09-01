import axios from '../lib/axios';

export async function getClubApi() {
    const host = process.env.REACT_APP_API_HOST;

    const response = await axios({
        url: `${host}/club/list`,
    });
    return response.data;
}
export const getClubsSearch = async (search) => {
    const host = process.env.REACT_APP_API_HOST;
    const resposne = await axios({
        url: `${host}/clubs?limit=10&search=${search}`
    })

    return resposne.data;
}
export async function getClubs() {
    const host = process.env.REACT_APP_API_HOST;
    const response = await axios({
        url: `${host}/clubs`
    });

    return response.data;
}


