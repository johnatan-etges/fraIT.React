import axios from 'axios';

const api = axios.create({
  baseURL: 'http://johnatandell:8329'
});

export default api;

