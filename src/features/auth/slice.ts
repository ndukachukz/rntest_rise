import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

const initialState: AuthSlice = {
  user: undefined,
  token: undefined,
  signupCredentials: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
    setSignupCredentials: (
      state,
      action: PayloadAction<Partial<SignUpRequest>>,
    ) => {
      state.signupCredentials = action.payload;
    },
  },
});

export const {setToken, setSignupCredentials} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.user;

export default authSlice.reducer;
