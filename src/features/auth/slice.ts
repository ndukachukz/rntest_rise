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
    setCrendentials: (state, action: PayloadAction<AuthSlice>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setSignupCredentials: (
      state,
      action: PayloadAction<Partial<SignUpRequest>>,
    ) => {
      state.signupCredentials = action.payload;
    },
  },
});

export const {setCrendentials, setSignupCredentials} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.user;

export default authSlice.reducer;
