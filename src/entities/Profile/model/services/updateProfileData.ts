import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../types/ProfileSchema';
import { ThunkConfig } from '../../../../app/providers';

const updateProfileData = createAsyncThunk<IProfile, IProfile, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (arg, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.patch('/profile', arg);

      if (response.status !== 200) {
        throw new Error('error with update');
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);

export default updateProfileData;
