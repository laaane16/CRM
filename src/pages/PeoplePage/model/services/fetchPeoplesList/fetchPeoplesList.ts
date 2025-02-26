import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmployee } from '../../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { ThunkConfig } from '../../../../../app/providers';

type FetchPeoplesListProps = number | undefined;

export const fetchPeoplesList = createAsyncThunk<IEmployee[], FetchPeoplesListProps, ThunkConfig<string>>(
  'peoples/fetchPeoplesList',
  async (page, { rejectWithValue, extra, getState }) => {
    try {
      const limit = getState().peoples?.limit;

      const response = await extra.api.get('/peoples', {
        params: {
          _page: page || 1,
          _limit: limit,
        },
      });

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
