import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
import {RootState} from '../store';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signIn: builder.mutation<UserResponse, SignInRequest>({
      query: credentials => ({
        url: 'sessions',
        method: 'POST',
        body: credentials,
      }),
    }),

    signUp: builder.mutation<SignUpUserResponse, SignUpRequest>({
      query: credentials => ({
        url: 'users',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = authApi;
