import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmployee } from '../../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { ThunkConfig } from '../../../../../app/providers';
import { addQueryParams } from '../../../../../shared/utils/addQueryParams/addQueryParams';

interface FetchPeoplesListProps {
  replace: boolean;
}

export const fetchPeoplesList = createAsyncThunk<IEmployee[], FetchPeoplesListProps, ThunkConfig<string>>(
  'peoples/fetchPeoplesList',
  async ({ replace }, { rejectWithValue, extra, getState }) => {
    const state = getState();
    const peoplesState = state.peoples;

    const limit = peoplesState?.limit;
    const page = replace ? 1 : peoplesState?.page;
    const search = peoplesState?.search;
    const sort = peoplesState?.sortField;
    const order = peoplesState?.order;

    try {
      addQueryParams({ search, sort, order });

      const sortFields = state.sort?.entities['/people'].map((item) => item.title);
      const preparingSort = sortFields?.join(',');

      const orderFields = state.sort?.entities['/people'].map((item) => item.value);
      const preparingOrder = orderFields?.join(',');

      console.log(preparingSort);

      const response = await extra.api.get('/peoples', {
        params: {
          _page: nextPage,
          _limit: limit,
          _sort: sort || '',
          _order: order || '',
          q: search || '',
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
