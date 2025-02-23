import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProfile } from '../../types/ProfileSchema';
import { ThunkConfig } from '../../../../../app/providers';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const updateProfileData = createAsyncThunk<IProfile, IProfile, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (arg, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const errors = validateProfileData(arg);

      if (errors[0]) {
        throw new Error(...errors);
      }

      const response = await extra.api.put(`/profiles/${arg.userId}`, arg);

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
