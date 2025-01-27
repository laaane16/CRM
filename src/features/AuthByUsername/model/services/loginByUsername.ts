import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions, UserSchema } from '../../../../entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<UserSchema, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  // eslint-disable-next-line
  async (authdata, thunkAPI) => {
    try {
      const response = await axios.post<UserSchema>('http://localhost:8000/login', authdata);
      const { dispatch } = thunkAPI;

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
