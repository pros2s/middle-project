import axios from 'axios';
import { LOCALE_STORAGE_USER_KEY } from 'shared/consts/localeStorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization =
      localStorage.getItem(LOCALE_STORAGE_USER_KEY) || '';
  }

  return config;
});
