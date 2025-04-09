import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions, UserSchema } from '../../../../entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants/localstorage';
import { ThunkConfig } from '../../../../app/providers';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<UserSchema, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authdata, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<UserSchema>('/login', authdata);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
