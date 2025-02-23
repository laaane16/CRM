import { StateSchema } from '../../../../../app/providers';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
