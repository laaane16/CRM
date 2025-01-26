import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export type AppDispatch = ThunkDispatch<StateSchema, undefined, UnknownAction>;
