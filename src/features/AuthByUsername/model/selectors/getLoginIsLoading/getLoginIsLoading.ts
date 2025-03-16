import { StateSchema } from '../../../../../app/providers';

export const getLoginIsLoading = (state: StateSchema) => state.login?.isLoading || false;
