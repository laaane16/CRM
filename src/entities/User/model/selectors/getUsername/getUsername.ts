import { StateSchema } from '../../../../../app/providers';

export const getUsername = (state: StateSchema) => state.user?.username;
