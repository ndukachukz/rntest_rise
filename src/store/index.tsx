import React, {FC, PropsWithChildren} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import authReducer from '../features/auth/slice';
import appReducer from '../features/app/slice';
import {authApi} from '../services/authApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
