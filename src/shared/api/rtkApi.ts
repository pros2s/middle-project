import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCALE_STORAGE_USER_KEY } from 'shared/consts/localeStorage';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(LOCALE_STORAGE_USER_KEY) || '';

      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
