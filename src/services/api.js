import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '4924ed76cbbb35a2cc4095474436809f';

export const api = axios.create({
    baseURL: BASE_URL,
});