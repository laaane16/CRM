import { StateSchema } from '../../../../../app/providers';

export const getProfileError = (state: StateSchema) => state.profile?.error;
