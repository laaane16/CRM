import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '../../../app/providers';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectValue }>;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Returned, Arg, RejectValue> {
  api: jest.Mocked<AxiosStatic>;
  dispatch: Dispatch;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Returned, Arg, RejectValue>;

  constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
  }
  callThunk = async (arg: Arg) => {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api });
    return result;
  };
}
