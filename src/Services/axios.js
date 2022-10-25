import axios from 'axios';
const BASE_URL = 'http://api.ayawma.com'

export default axios.create({
    baseURL: BASE_URL,
    origin: true,
    headers: {'Content-Type': 'application/json' }, 
    withCredentials: true
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true
});