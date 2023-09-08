import {api} from './api';

export const authApi = api.injectEndpoints({
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
