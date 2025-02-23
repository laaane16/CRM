import { fetchTasksByUserId } from './fetchTasksByUserId';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk';

describe('fetchTasksByUserId.test', () => {
  test('fulfilled', async () => {
    const tasksValue = { name: '123' };

    const thunk = new TestAsyncThunk(fetchTasksByUserId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: tasksValue }));
    const result = await thunk.callThunk({ id: 1 });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(tasksValue);
  });

  // Return fullfiled i don't know
  test('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchTasksByUserId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ id: 1 });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
