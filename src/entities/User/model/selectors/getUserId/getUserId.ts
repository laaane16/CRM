import { StateSchema } from '../../../../../app/providers';

export const getUserId = (state: StateSchema) => state.user?.id;
