import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://601bb1e21a9c22001705f721.mockapi.io/',
});
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';
export default instance;
