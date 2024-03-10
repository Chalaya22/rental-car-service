import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://6557ec6bbd4bcef8b6134081.mockapi.io/advert/',
  params: {
    limit: 12,
  },
};

const instance = axios.create(axiosConfig);

export default instance;
