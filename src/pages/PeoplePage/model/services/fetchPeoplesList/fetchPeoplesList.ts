import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmployee } from '../../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { ThunkConfig } from '../../../../../app/providers';

interface FetchPeoplesListProps {
  replace: boolean;
}

export const fetchPeoplesList = createAsyncThunk<IEmployee[], FetchPeoplesListProps, ThunkConfig<string>>(
  'peoples/fetchPeoplesList',
  async (arg, { rejectWithValue, extra, getState }) => {
    try {
      const state = getState();
      const limit = state.peoples?.limit;
      const curPage = state.peoples?.page ?? 0;
      const nextPage = arg.replace ? 1 : curPage + 1;

      const sortFields = state.sort?.entities['/people'].map((item) => item.title);
      const preparingSort = sortFields?.join(',');

      const orderFields = state.sort?.entities['/people'].map((item) => item.value);
      const preparingOrder = orderFields?.join(',');

      console.log(preparingSort);

      const response = await extra.api.get('/peoples', {
        params: {
          _page: nextPage,
          _limit: limit,
          _sort: preparingSort || '',
          _order: preparingOrder || '',
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
