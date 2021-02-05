import axios from 'axios';

const api = axios.create({
  baseURL: 'http://johnatandell:33333'
});

export default api;

