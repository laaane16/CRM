import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers';

type ISelector<T, Args extends unknown[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends unknown[]> = (...args: Args) => T;
type Result<T, Args extends unknown[]> = [Hook<T, Args>, ISelector<T, Args>];

export const buildSelector = <T, Args extends unknown[]>(selector: ISelector<T, Args>): Result<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args) => {
    return useSelector((state: StateSchema) => selector(state, ...args));
  };

  return [useSelectorHook, selector];
};
