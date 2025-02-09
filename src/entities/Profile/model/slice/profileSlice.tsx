import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/ProfileSchema';
import { profileFetchData } from '../services/profileFetchData';
import updateProfileData from '../services/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(profileFetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(profileFetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(profileFetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
