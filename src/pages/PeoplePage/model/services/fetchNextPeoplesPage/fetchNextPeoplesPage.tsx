import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../../app/providers';
import { fetchPeoplesList } from '../fetchPeoplesList/fetchPeoplesList';

export const fetchNextPeoplesPage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'peoples/fetchNextPeoplesPage',
  (arg, { dispatch, getState }) => {
    const peoplesState = getState();
    const currentPage = peoplesState.peoples?.page || 1;
    const isLoading = peoplesState.peoples?.isLoading;
    const hasMore = peoplesState.peoples?.hasMore;

    if (isLoading || !hasMore) {
      return;
    }

    dispatch(fetchPeoplesList(currentPage));

    return;
  },
);
