import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:56223/api/'
});

export default api;