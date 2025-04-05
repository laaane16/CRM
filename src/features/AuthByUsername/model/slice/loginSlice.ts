import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername';
import { buildSlice } from '../../../../shared/lib/store/buildSlice';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};
const loginSlice = buildSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      if (state.error) {
        state.error = undefined;
      }
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
      if (state.error) {
        state.error = undefined;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.fulfilled, (state) => {
        state.password = '';
        state.username = '';
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(loginByUsername.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { reducer: loginReducer, actions: loginActions, useActions: useLoginActions } = loginSlice;
