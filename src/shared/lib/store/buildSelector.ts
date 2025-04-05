import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers';

type ISelector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, ISelector<T>];

export const buildSelector = <T>(selector: ISelector<T>): Result<T> => {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
};
