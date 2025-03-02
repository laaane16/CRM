import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollMap, SaveScrollSchema } from '../types/SaveScrollSchema';

const initialState: SaveScrollSchema = {
  map: {},
};

const saveScrollSlice = createSlice({
  name: 'saveScrollSlice',
  initialState,
  reducers: {
    saveScroll: (state, action: PayloadAction<{ path: string; scroll: number }>) => {
      const { path, scroll } = action.payload;
      state.map[path] = scroll;
    },
  },
});

export const { reducer: saveScrollReducer } = saveScrollSlice;
export const { actions: saveScrollActions } = saveScrollSlice;
