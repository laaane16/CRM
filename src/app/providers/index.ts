export { type StateSchema } from './StoreProvider/config/types/StateSchema';
export { default as ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
export { store } from './StoreProvider/config/store/store';

export { default as StoreProvider } from './StoreProvider/ui/StoreProvider';

import type { AppDispatch } from './StoreProvider/config/types/AppDispatch';
export type { AppDispatch };
