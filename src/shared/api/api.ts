import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../constants/localstorage';

export const $api = axios.create({
  baseURL: 'http://localhost:8000',
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  }

  return config;
});
