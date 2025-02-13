import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../../types/ProfileSchema';
import { ThunkConfig } from '../../../../../app/providers';

interface ProfileFetchDataProps {
  id: number;
}

export const profileFetchData = createAsyncThunk<IProfile, ProfileFetchDataProps, ThunkConfig<string>>(
  'profile/profileFetchData',
  async (arg, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get('/profile');

      if (!response.data) {
        throw new Error('no data');
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
