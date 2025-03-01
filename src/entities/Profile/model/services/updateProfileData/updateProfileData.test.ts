import updateProfileData from './updateProfileData';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk';
import { StateSchema } from '../../../../../app/providers';

const profileValue = {
  name: 'John',
  number: '+79871234312',
  mail: 'testmail@gmail.com',
  userId: 1,
  telegram: '@alex_solo',
  age: 22,
  post: {
    main: 'main work',
    extra: 'extra work',
  },
  address: 'asd',
  avatar: 'https://timeweb.com/ru/community/article/43/4372a42395939b59d7e234e6042983f8.jpg',
  createdAt: '12.05.2019',
  updatedAt: '20.01.2020',
};

describe('loginByUsername.test', () => {
  test('fulfilled', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue, status: 200 }));
    const mockedState = (): DeepPartial<StateSchema> => {
      return {
        profile: {
          form: profileValue,
        },
      };
    };
    const result = await thunk.callThunk(profileValue, { getState: mockedState });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileValue);
  });

  test('no update if form and data the same', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue, status: 200 }));
    const mockedState = (): DeepPartial<StateSchema> => {
      return {
        profile: {
          form: profileValue,
          data: profileValue,
        },
      };
    };
    const result = await thunk.callThunk(profileValue, { getState: mockedState });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalledTimes(0);

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileValue);
  });

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const mockedState = (): DeepPartial<StateSchema> => {
      return {
        profile: {
          form: profileValue,
        },
      };
    };
    const result = await thunk.callThunk(profileValue, { getState: mockedState });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
