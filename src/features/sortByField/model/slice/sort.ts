import { SortSchema } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: SortSchema = {
  entities: {},
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    initState: (state, action) => {
      const { key, values } = action.payload;

      state.entities[key] = values;
    },
    setSort: (state, action) => {
      const { key, sort } = action.payload;
      const entity = state.entities[key];
      const field = entity.find((i) => sort.title === i.title);
      if (field) {
        field.value = sort.value;
      }
    },
  },
});

export const { reducer: sortReducer } = sortSlice;
export const { actions: sortActions } = sortSlice;
