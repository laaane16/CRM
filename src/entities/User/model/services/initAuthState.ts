import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/constants';
import { getJsonSettingsQuery } from '../api/userJsonSettingsApi';
import { UserSchema } from '../types/types';
import { ThunkConfig } from '../../../../app/providers';

export const initAuthState = createAsyncThunk<UserSchema, undefined, ThunkConfig<string>>(
  'user/initAuthState',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    const id = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    try {
      if (id) {
        const { data, error } = await dispatch(getJsonSettingsQuery(Number(id)));
        if (error || !data) {
          throw new Error('error');
        }

        return data;
      }
      throw new Error('error');
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
