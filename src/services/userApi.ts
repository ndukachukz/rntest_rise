import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
import {RootState} from '../store';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getUser: builder.query({
      query: arg => ({
        url: '',
      }),
    }),
  }),
});

export const {useGetUserQuery} = userApi;
