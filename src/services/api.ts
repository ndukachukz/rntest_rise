import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query';
import {BASE_URL} from '../constants';
import {RootState} from '../store';
import {createApi} from '@reduxjs/toolkit/dist/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders(headers, {getState}) {
    const token = (getState() as RootState).auth.token;

    if (token) headers.set('Authorization', `Bearer ${token}`);

    return headers;
  },
});

export const api = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: _ => ({}),
});
