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
