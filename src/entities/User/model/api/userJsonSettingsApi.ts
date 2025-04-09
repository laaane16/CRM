import { rtkApi } from '../../../../shared/api/rtkApi';
import { IJsonSettings, UserSchema } from '../types/types';

interface SetJsonSettingsArg {
  userId: number;
  jsonSettings: IJsonSettings;
}

const userJsonSettingsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // return User without isLoading and e.t.c, but we ignored it
    setJsonSettings: build.mutation<UserSchema, SetJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    // return User without isLoading and e.t.c, but we ignored it
    getJsonSettings: build.query<UserSchema, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const setJsonSettingsMutation = userJsonSettingsApi.endpoints.setJsonSettings.initiate;
export const getJsonSettingsQuery = userJsonSettingsApi.endpoints.getJsonSettings.initiate;
