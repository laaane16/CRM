import { StateSchema } from '../../../../../app/providers';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
