export interface ProfileSchema {
  data?: IProfile;
  readonly: boolean;
  isLoading: boolean;
  error?: string;
  form?: IProfile;
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

export enum ValidateProfileErrors {
  NO_DATA = 'NO_DATA',
  INCORRECT_NUMBER = 'INCORRECT_NUMBER',
  INCORRECT_MAIL = 'INCORRECT_MAIL',
}
