export { type StateSchema } from './StoreProvider/config/types/StateSchema';
export { default as ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
export { createStore } from './StoreProvider/config/store/store';
export type { ReduxStoreWithManager } from './StoreProvider/config/types/StateSchema';

export { default as StoreProvider } from './StoreProvider/ui/StoreProvider';

import type { AppDispatch } from './StoreProvider/config/types/AppDispatch';
export type { AppDispatch };
