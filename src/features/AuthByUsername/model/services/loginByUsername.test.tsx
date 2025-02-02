import { loginByUsername } from './loginByUsername';
import { userActions } from '../../../../entities/User';
import { TestAsyncThunk } from '../../../../shared/lib/tests/TestAsyncThunk';

describe('loginByUsername.test', () => {
  test('fulfilled', async () => {
    const userValue = { id: 1, username: '123' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '123', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '1234' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
