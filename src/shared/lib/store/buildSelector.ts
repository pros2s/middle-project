import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type SelectorType<T> = (state: StateSchema) => T;
type ReturnResult<T> = [() => T, SelectorType<T>];

export const buildSelector = <T>(
  selector: SelectorType<T>,
): ReturnResult<T> => {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
};
