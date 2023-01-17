import axios from 'axios';
import { LOCALE_STORAGE_USER_KEY } from '@/shared/consts/localeStorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.defaults.headers.common.Authorization =
  localStorage.getItem(LOCALE_STORAGE_USER_KEY) || '';
