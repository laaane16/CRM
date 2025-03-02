import { StateSchema } from '../../../../../app/providers';

export const getPeoplesIsLoading = (state: StateSchema) => state.peoples?.isLoading || false;
