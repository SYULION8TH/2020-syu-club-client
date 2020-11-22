import Axios from 'axios';
import {
    AddAxiosPendingWorks,
    SubAxiosPendingWorks,
    ResetAxiosPendingWorks,
} from '../modules/AxiosPendingWorks';
import { store } from '../';

Axios.defaults.withCredentials = true;
Axios.defaults.xsrfCookieName = 'csrftoken';
Axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
//쿠키 넣고 싶어요......로그인유지하고싶어요............
// const token = store.getState().session.token;
// Axios.defaults.headers.common['Authorization'] = token;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//여기까지
Axios.interceptors.request.use(
    (config) => {
        store.dispatch(AddAxiosPendingWorks(config.url));
        return config;
    },
    (error) => {
        store.dispatch(ResetAxiosPendingWorks());
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use(
    (response) => {
        store.dispatch(SubAxiosPendingWorks(response.config.url));
        return response;
    },
    (error) => {
        store.dispatch(ResetAxiosPendingWorks());
        return Promise.reject(error);
    },
);

export default Axios;
