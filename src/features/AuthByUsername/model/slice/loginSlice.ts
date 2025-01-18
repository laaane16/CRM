import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername';
import { Navigate } from 'react-router-dom';
import { userActions } from '../../../../entities/User';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import { useDispatch } from 'react-redux';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.password = '';
        state.username = '';
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(loginByUsername.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { reducer: loginReducer } = loginSlice;
export const { actions: loginActions } = loginSlice;
