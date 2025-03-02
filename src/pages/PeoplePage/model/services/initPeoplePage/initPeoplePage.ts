import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../app/providers';
import { peoplesActions } from '../../slice/peoplePageSlice';
import { fetchPeoplesList } from '../fetchPeoplesList/fetchPeoplesList';
import { getPeoplesInit } from '../../selectors/getPeoplesInit/getPeoplesInit';

export const initPeoplePage = createAsyncThunk<unknown, void, ThunkConfig<string>>(
  'peoples/initPeoplePage',
  (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const _inited = getPeoplesInit(getState());

    const params: Record<string, string> = {};

    const currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.forEach((value, key) => (params[key] = value));

    dispatch(peoplesActions.setSearch(params.search));
    dispatch(peoplesActions.setSort({ field: params.sort, order: params.order }));

    if (!_inited) {
      dispatch(peoplesActions.initState());
      dispatch(fetchPeoplesList({ replace: false }));
    }
  },
);
