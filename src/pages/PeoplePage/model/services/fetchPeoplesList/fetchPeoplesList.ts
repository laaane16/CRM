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
    const filters = peoplesState?.filters;

    const prepareFilters: Record<string, string[]> = {};

    filters?.forEach((i) =>
      prepareFilters[i.field] ? prepareFilters[i.field].push(i.value) : (prepareFilters[i.field] = [i.value]),
    );

    try {
      addQueryParams({ search, sort, order, ...prepareFilters });

      const response = await extra.api.get('/peoples', {
        params: {
          _page: page || 1,
          _limit: limit,
          _sort: sort || '',
          _order: order || '',
          q: search || '',
          ...prepareFilters,
        },
      });

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
