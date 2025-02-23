import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasksByUserId } from '../services/fetchTasksByUserId/fetchTasksByUserId';
import { StateSchema } from '../../../../app/providers';
import { ITask, TasksSchema } from '../types/TaskSchema';

const tasksAdapter = createEntityAdapter<ITask, number>({ selectId: (tasks) => tasks.id });

const initialState = tasksAdapter.getInitialState<TasksSchema>({
  isLoading: false,
  ids: [],
  entities: {},
});

export const tasksSelectors = tasksAdapter.getSelectors<StateSchema>((state) => state.tasks || initialState);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksByUserId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchTasksByUserId.fulfilled, (state, action: PayloadAction<ITask[]>) => {
        state.isLoading = false;
        tasksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTasksByUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { reducer: tasksReducer } = tasksSlice;
export const { actions: tasksActions } = tasksSlice;
