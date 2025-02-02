import { SerializedError } from '@reduxjs/toolkit';

export interface ProfileSchema {
  data: IProfile | undefined;
  readonly: boolean;
  isLoading: boolean;
  error: SerializedError | undefined;
}

interface IPost {
  main: string;
  extra: string;
}

export interface IProfile {
  telegram: string;
  userId: number;
  name: string;
  age: number;
  number: string;
  mail: string;
  post: IPost;
  address: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}
