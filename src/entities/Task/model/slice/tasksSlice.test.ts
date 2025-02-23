import { StateSchema } from '../../../../app/providers';
import { fetchTasksByUserId } from '../services/fetchTasksByUserId/fetchTasksByUserId';
import { TasksSchema } from '../types/TaskSchema';
import { tasksReducer } from './tasksSlice';

const state: TasksSchema = {
  isLoading: false,
  ids: [],
  entities: {},
};

type Entity = { id: number; title: string };

describe('tasksSlice.test', () => {
  test('fullfiled', () => {
    const payload: Entity[] = [
      { id: 1, title: '1' },
      { id: 2, title: '2' },
      { id: 3, title: '3' },
    ];

    const result = tasksReducer(state, {
      type: fetchTasksByUserId.fulfilled.type,
      payload,
    });

    const entities: Record<string, Entity> = {};

    payload.forEach((i) => (entities[i.id] = i));

    expect(result).toEqual({ isLoading: false, ids: payload.map((i) => i.id), entities });
  });

  test('rejected', () => {
    const result = tasksReducer(state, { type: fetchTasksByUserId.rejected.type, error: 'error' });

    expect(result).toEqual({ isLoading: false, ids: [], entities: {}, error: 'error' });
  });

  test('pending', () => {
    const result = tasksReducer(state, { type: fetchTasksByUserId.pending.type, error: 'error' });

    expect(result).toEqual({ isLoading: true, ids: [], entities: {}, error: undefined });
  });
});
