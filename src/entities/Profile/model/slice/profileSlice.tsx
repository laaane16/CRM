import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfile, ProfileSchema } from '../types/ProfileSchema';
import { profileFetchData } from '../services/profileFetchData/profileFetchData';
import updateProfileData from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.error = undefined;
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },

    onEditorMode: (state) => {
      state.readonly = true;
    },

    cancelEdit: (state) => {
      state.form = state.data;
      state.readonly = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(profileFetchData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })

      .addCase(profileFetchData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })

      .addCase(profileFetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.readonly = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
