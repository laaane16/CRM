import { createAsyncThunk } from '@reduxjs/toolkit';
import { IJsonSettings } from '../types/types';
import { StateSchema, ThunkConfig } from '../../../../app/providers';
import { setJsonSettingsMutation } from '../api/userJsonSettingsApi';

interface IArg {
  userId: number;
  jsonSettings: IJsonSettings;
}

export const setUserJsonSettings = createAsyncThunk<IJsonSettings, IArg, ThunkConfig<string>>(
  'user/setUserJsonSettings',
  async (arg, thunkAPI) => {
    const { userId, jsonSettings } = arg;
    const { dispatch, getState, rejectWithValue } = thunkAPI;

    const currentJsonSettings = getState()?.user.jsonSettings;
    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId,
          jsonSettings: {
            ...currentJsonSettings,
            ...jsonSettings,
          },
        }),
      );

      if (response.error) {
        throw new Error('error');
      }

      return response.data.jsonSettings || ({} as IJsonSettings);
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
