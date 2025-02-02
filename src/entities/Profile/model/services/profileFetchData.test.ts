import { profileFetchData } from './profileFetchData';
import { TestAsyncThunk } from '../../../../shared/lib/tests/TestAsyncThunk';

describe('loginByUsername.test', () => {
  test('fulfilled', async () => {
    const profileValue = { name: '123' };

    const thunk = new TestAsyncThunk(profileFetchData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));
    const result = await thunk.callThunk({ id: 1 });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileValue);
  });

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(profileFetchData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ id: 1 });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
