import axios from 'axios';

export async function getSomething() {
    const host = 'localhost:3000'; // 실제 호스트가 생기면 변경
    const response = await axios({
        url: `${host}/something`,
    });
    return response.data;
}
