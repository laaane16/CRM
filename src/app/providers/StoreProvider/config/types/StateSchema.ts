import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from '../../../../../entities/User';
import { LoginSchema } from '../../../../../features/AuthByUsername';
import { ProfileSchema } from '../../../../../entities/Profile';
import { AxiosInstance } from 'axios';
import { TasksSchema } from '../../../../../entities/Task/model/types/TaskSchema';
import { AppDispatch } from './AppDispatch';
import { UseDispatch, useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../../shared/lib';

export interface StateSchema {
  user: UserSchema;

  //Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
  tasks?: TasksSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reduce: (state: any, action: Action) => any;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
