import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProfile } from '../../types/ProfileSchema';
import { ThunkConfig } from '../../../../../app/providers';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';

const updateProfileData = createAsyncThunk<IProfile, IProfile, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const form = getProfileForm(getState());
    const data = getProfileData(getState());

    if (!form) {
      return data;
    }

    if (JSON.stringify(form) === JSON.stringify(data)) {
      return form;
    }

    try {
      const errors = validateProfileData(form);

      if (errors[0]) {
        throw new Error(...errors);
      }

      const response = await extra.api.put(`/profiles/${form.userId}`, form);

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
