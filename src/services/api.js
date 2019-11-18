import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization: 'Bearer 9e5574008a3e438e9758d1e389a7b20f',
  },
});

export default api;
