import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../store';

const initialState: DynamicApp = {
  errorModal: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAppState: (state, action: PayloadAction<object>) => {
      state = {...state, ...action.payload};
    },
    clearAppState: state => {
      state = {};
    },
    setErrorModal: (state, action: PayloadAction<Partial<InfoModalData>>) => {
      console.log('PAYLOAD => ', !!action.payload);
      state = {
        ...state,
        showError: !!action.payload,
        errorModal: action.payload,
      };
    },
  },
});

export const {updateAppState, clearAppState, setErrorModal} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
