import { SerializedError } from '@reduxjs/toolkit';

export interface ProfileSchema {
  data: IProfile | undefined;
  readonly: boolean;
  isLoading: boolean;
  error: SerializedError | undefined;
}

export interface IProfile {
  userId: number;
  name: string;
  age: number;
  number: string;
  mail: string;
  post: string;
  address: string;
  avatar: string;
}
