import { StateSchema } from '../../../../../app/providers';
import { buildSelector } from '../../../../../shared/lib/store/buildSelector';

export const [useLoginIsLoading, getLoginIsLoading] = buildSelector(
  (state: StateSchema) => state.login?.isLoading || false,
);
