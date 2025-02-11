import { StateSchema } from '../../../../../app/providers';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
