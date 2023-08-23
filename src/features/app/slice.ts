import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

const initialState: DynamicApp = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAppState: (state, action: PayloadAction<object>) => {
      state = {...state, ...action.payload};
    },
  },
});

export const {updateAppState} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
