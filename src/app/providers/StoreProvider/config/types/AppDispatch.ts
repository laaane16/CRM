import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, UnknownAction>;
