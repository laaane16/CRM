import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };

    const action = loginReducer(state as LoginSchema, loginActions.setPassword('123'));

    expect(action).toEqual({ password: '123' });
  });

  test('set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };

    const action = loginReducer(state as LoginSchema, loginActions.setUsername('1234'));

    expect(action).toEqual({ username: '1234' });
  });
});
