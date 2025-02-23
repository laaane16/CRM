import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask } from '../../types/TaskSchema';
import { ThunkConfig } from '../../../../../app/providers';

interface FetchTasksByUserIdProps {
  id: number;
}

export const fetchTasksByUserId = createAsyncThunk<ITask[], FetchTasksByUserIdProps, ThunkConfig<string>>(
  'tasks/fetchTasksByUserId',
  async ({ id }, thunkAPI) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkAPI;

    try {
      const response = await api.get(`/tasks`, {
        params: {
          userId: id,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error('no data');
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
