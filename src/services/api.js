import axios from 'axios';

const api = axios.create({
  // url: 'https://newsapi.org/v2',
  // headers: {
  //   Authorization: 'Bearer 9e5574008a3e438e9758d1e389a7b20f',
  // },
  baseURL: 'http://localhost:3333',
});

export default api;
