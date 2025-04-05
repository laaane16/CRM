import { bindActionCreators, createSlice, CreateSliceOptions } from '@reduxjs/toolkit';
import { SliceCaseReducers, SliceSelectors } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useMemo } from 'react';

export const buildSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
  const slice = createSlice(options);

  const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
  };

  return {
    ...slice,
    useActions,
  };
};
