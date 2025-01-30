export { default as ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
export { createStore } from './StoreProvider/config/store/store';

export { default as StoreProvider } from './StoreProvider/ui/StoreProvider';

import type { AppDispatch } from './StoreProvider/config/types/AppDispatch';
export type { AppDispatch };
export {
  type StateSchema,
  type ReduxStoreWithManager,
  type ThunkExtraArg,
  type ThunkConfig,
} from './StoreProvider/config/types/StateSchema';
