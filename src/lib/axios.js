import Axios from 'axios';

Axios.defaults.withCredentials = true;
Axios.defaults.xsrfCookieName = 'csrftoken';
Axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default Axios;
